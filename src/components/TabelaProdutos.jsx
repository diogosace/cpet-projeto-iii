import { Link } from "@tanstack/react-router";
import { formatarPreco } from "../lib/formato.js";

/**
 * @param {{ produtos: import("../types/index.js").Produto[], rotuloPeriodo: string }} props
 */
export default function TabelaProdutos({ produtos, rotuloPeriodo }) {
  // colunas saem das specs do 1o produto; todos da mesma linha tem as mesmas chaves
  const colunas = Object.keys(produtos[0]?.specs ?? {});

  return (
    <table className="tabela-produtos">
      <thead>
        <tr>
          <th scope="col">Plano</th>
          {colunas.map((c) => (
            <th scope="col" key={c}>{c}</th>
          ))}
          <th scope="col" className="text-end">Preço</th>
          <th scope="col"><span className="visually-hidden">Ação</span></th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((p) => (
          <tr key={p.id}>
            <th scope="row" className="tp-nome">{p.nome}</th>
            {colunas.map((c) => (
              <td key={c} data-rotulo={c} className="mono">{p.specs[c]}</td>
            ))}
            <td data-rotulo="preço" className="mono text-md-end tp-preco">
              {formatarPreco(p.preco)}
              <span className="tp-periodo">{rotuloPeriodo}</span>
            </td>
            <td className="tp-acao">
              <Link
                to="/contato"
                search={{ produto: p.slug }}
                className="btn btn-nh"
                aria-label={`Contratar ${p.nome}`}
              >
                contratar
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
