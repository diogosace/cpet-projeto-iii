import { Link } from "@tanstack/react-router";

const status = [
  { chave: "uptime 90 dias", valor: "99,95%" },
  { chave: "tempo médio de ativação", valor: "4 min" },
  { chave: "suporte", valor: "seg–sáb, 8h–22h" },
];

const passos = [
  { titulo: "dscolhe o plano", texto: "hospedagem, vps ou script. preço fechado, sem taxa de instalação." },
  { titulo: "paga por Pix ou cartão", texto: "pix confirma em segundos. cartão, assim que a operadora aprova." },
  { titulo: "serviço liberado", texto: "o sistema cria a conta e manda os acessos. sem esperar alguém online." },
  { titulo: "avisos de vencimento", texto: "lembretes por e-mail, discord e telegram antes da fatura vencer." },
];

const infra = [
  ["sistema", "ubuntu server 24.04 lts"],
  ["armazenamento", "ssd nvme em raid 1"],
  ["backups", "diários, retenção de 7 dias"],
  ["https", "let's encrypt, renovação automática"],
  ["painel", "login com 2FA (TOTP)"],
  ["rede", "ipv4 + ipv6, proteção ddos básica"],
];

export default function Empresa() {
  return (
    <>
      <section className="secao secao-topo" aria-labelledby="titulo-empresa">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-7">
              <p className="rotulo mono">nimbushost / empresa</p>
              <h1 id="titulo-empresa" className="titulo-pagina">
                hospedagem que libera o serviço assim que o pagamento cai.
              </h1>
              <p className="lead-nh">
                sites, vps e scripts de automação. servidores no Brasil, suporte feito por quem administra as máquinas.
              </p>
            </div>
            <div className="col-lg-5">
              <dl className="painel-status" aria-label="Status do serviço">
                {status.map((s) => (
                  <div className="ps-linha" key={s.chave}>
                    <dt className="mono">{s.chave}</dt>
                    <dd className="mono">{s.valor}</dd>
                  </div>
                ))}
                <p className="ps-nota">* dados demonstrativos</p>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="secao" aria-labelledby="quem-somos">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3">
              <h2 id="quem-somos" className="titulo-secao">
                quem somos
              </h2>
            </div>
            <div className="col-md-8">
              <p>
                a nimbushost começou pequena: vendíamos planos pelo discord e pelo telegram e liberávamos cada conta na
                mão, conferindo comprovante por comprovante. funcionava, mas o cliente ficava esperando alguém
                responder.
              </p>
              <p>
                hoje o ciclo inteiro é automático: compra, pagamento, liberação, cobrança e aviso. continuamos pequenos,
                e é por isso que o suporte ainda é feito pelas mesmas pessoas que cuidam dos servidores.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="secao" aria-labelledby="como-funciona">
        <div className="container">
          <h2 id="como-funciona" className="titulo-secao">
            como funciona
          </h2>
          <ol className="linha-tempo">
            {passos.map((p, i) => (
              <li key={p.titulo}>
                <span className="mono lt-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="lt-titulo">{p.titulo}</h3>
                <p>{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="secao" aria-labelledby="infraestrutura">
        <div className="container">
          <h2 id="infraestrutura" className="titulo-secao">
            infraestrutura
          </h2>
          <table className="tabela-kv">
            <caption className="visually-hidden">especificações da infraestrutura</caption>
            <tbody>
              {infra.map(([k, v]) => (
                <tr key={k}>
                  <th scope="row">{k}</th>
                  <td className="mono">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="secao">
        <div className="container chamada">
          <p className="mb-0">
            planos a partir de <span className="mono">R$ 12,90/mês</span>.
          </p>
          <Link to="/produtos" className="link-seta">
            ver tabela de produtos →
          </Link>
        </div>
      </section>
    </>
  );
}
