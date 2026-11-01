import { Link } from "@tanstack/react-router";

export default function NaoEncontrada() {
  return (
    <section className="secao secao-topo">
      <div className="container">
        <p className="rotulo mono">erro 404</p>
        <h1 className="titulo-pagina">página não encontrada</h1>
        <pre className="bloco-codigo" aria-hidden="true">{`$ curl -I https://nimbushost.com.br/...
HTTP/2 404`}</pre>
        <p>o endereço pode ter mudado ou nunca existiu.</p>
        <Link to="/" className="link-seta">
          ← voltar para a página inicial
        </Link>
      </div>
    </section>
  );
}
