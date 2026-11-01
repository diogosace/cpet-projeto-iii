import Faq from "../components/Faq.jsx";
import { perguntas } from "../data/faq.js";

export default function PaginaFaq() {
  return (
    <section className="secao secao-topo">
      <div className="container">
        <p className="rotulo mono">nimbushost / faq</p>
        <h1 className="titulo-pagina">perguntas frequentes</h1>
        <p className="lead-nh">respostas curtas. se faltar algo, use a página de contato.</p>
        <div className="mt-4">
          <Faq itens={perguntas} />
        </div>
      </div>
    </section>
  );
}
