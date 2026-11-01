import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { assuntos, esquemaContato, enviarContato } from "../lib/contato.js";
import { linhas, produtosDaLinha, acharProduto } from "../data/produtos.js";

/** @param {{ produtoInicial?: string }} props */
export default function FormContato({ produtoInicial }) {
  // estados "parado", "enviando", "ok" e "erro"
  const [estado, setEstado] = useState("parado");
  const [protocolo, setProtocolo] = useState("");

  const slugValido = acharProduto(produtoInicial) ? produtoInicial : "";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(esquemaContato),
    defaultValues: {
      nome: "",
      email: "",
      assunto: slugValido ? "comercial" : undefined,
      produto: slugValido,
      mensagem: "",
    },
  });

  const enviar = handleSubmit(async (dados) => {
    setEstado("enviando");
    try {
      const r = await enviarContato(dados);
      setProtocolo(r.protocolo);
      setEstado("ok");
      reset();
    } catch {
      setEstado("erro");
    }
  });

  if (estado === "ok") {
    return (
      <div className="aviso aviso-ok" role="status">
        <p className="mb-1">
          <strong>mensagem recebida.</strong>
        </p>
        <p className="mb-2">
          protocolo <span className="mono">{protocolo}</span>. respondemos por e-mail.
        </p>
        <button type="button" className="btn btn-nh-sec" onClick={() => setEstado("parado")}>
          enviar outra mensagem
        </button>
      </div>
    );
  }

  /** @param {keyof typeof errors} campo */
  const erroDe = (campo) =>
    errors[campo] ? (
      <p className="campo-erro" id={`${campo}-erro`}>
        {errors[campo]?.message}
      </p>
    ) : null;

  /** @param {keyof typeof errors} campo */
  const aria = (campo) => ({
    "aria-invalid": errors[campo] ? true : undefined,
    "aria-describedby": errors[campo] ? `${campo}-erro` : undefined,
  });

  return (
    <form onSubmit={enviar} noValidate className="form-contato">
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="nome" className="form-label">
            nome
          </label>
          <input id="nome" className="form-control" autoComplete="name" {...register("nome")} {...aria("nome")} />
          {erroDe("nome")}
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            e-mail
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            autoComplete="email"
            {...register("email")}
            {...aria("email")}
          />
          {erroDe("email")}
        </div>
        <div className="col-md-6">
          <label htmlFor="assunto" className="form-label">
            assunto
          </label>
          <select id="assunto" className="form-select" {...register("assunto")} {...aria("assunto")}>
            <option value="">selecione</option>
            {assuntos.map((a) => (
              <option key={a.valor} value={a.valor}>
                {a.rotulo}
              </option>
            ))}
          </select>
          {erroDe("assunto")}
        </div>
        <div className="col-md-6">
          <label htmlFor="produto" className="form-label">
            produto de interesse <span className="opcional">(opcional)</span>
          </label>
          <select id="produto" className="form-select" {...register("produto")}>
            <option value="">nenhum em específico</option>
            {linhas.map((l) => (
              <optgroup key={l.id} label={l.titulo}>
                {produtosDaLinha(l.id).map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.nome}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
        <div className="col-12">
          <label htmlFor="mensagem" className="form-label">
            mensagem
          </label>
          <textarea id="mensagem" rows={6} className="form-control" {...register("mensagem")} {...aria("mensagem")} />
          {erroDe("mensagem")}
        </div>
      </div>

      {estado === "erro" && (
        <div className="aviso aviso-erro mt-3" role="alert">
          não deu para enviar agora. tente de novo ou fale pelo e-mail ao lado.
        </div>
      )}

      <button type="submit" className="btn btn-nh mt-3" disabled={estado === "enviando"}>
        {estado === "enviando" ? "enviando…" : "enviar mensagem"}
      </button>
    </form>
  );
}
