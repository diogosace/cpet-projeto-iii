import TabelaProdutos from "../components/TabelaProdutos.jsx";
import { linhas, produtosDaLinha } from "../data/produtos.js";

export default function Produtos() {
  return (
    <>
      <section className="secao secao-topo">
        <div className="container">
          <p className="rotulo mono">nimbushost / produtos</p>
          <h1 className="titulo-pagina">produtos e preços</h1>
          <p className="lead-nh">
            preços em reais, sem taxa de instalação. clique em contratar para falar com a gente.
          </p>
        </div>
      </section>

      <nav className="submenu" aria-label="Linhas de produto">
        <div className="container">
          <ul>
            {linhas.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.titulo}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {linhas.map((l) => (
        <section className="secao" id={l.id} key={l.id} aria-labelledby={`t-${l.id}`}>
          <div className="container">
            <h2 id={`t-${l.id}`} className="titulo-secao">
              {l.titulo}
            </h2>
            <p className="desc-linha">{l.descricao}</p>
            <TabelaProdutos produtos={produtosDaLinha(l.id)} rotuloPeriodo={l.rotuloPeriodo} />
            {l.id === "sites" && (
              <p className="nota mt-2">
                * ilimitado dentro do uso justo: sem limite fixo, mas contas que afetam o servidor são avisadas antes de
                qualquer ação.
              </p>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
