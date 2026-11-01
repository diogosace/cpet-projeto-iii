import { Link } from "@tanstack/react-router";
import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-5">
            <Logo variante="escura" />
            <p className="rodape-texto mt-3">hospedagem, vps e automações. servidores no brasil.</p>
          </div>
          <nav className="col-6 col-md-3" aria-label="Rodapé">
            <h2 className="rodape-titulo">páginas</h2>
            <ul className="list-unstyled">
              <li>
                <Link to="/">empresa</Link>
              </li>
              <li>
                <Link to="/produtos">produtos</Link>
              </li>
              <li>
                <Link to="/contato">contato</Link>
              </li>
              <li>
                <Link to="/faq">faq</Link>
              </li>
            </ul>
          </nav>
          <div className="col-6 col-md-4">
            <h2 className="rodape-titulo">status</h2>
            <p className="mono rodape-texto">
              <span className="led" aria-hidden="true" /> todos os sistemas operando
            </p>
            <p className="mono rodape-texto">suporte: seg–sáb, 8h–22h</p>
          </div>
        </div>
        <p className="rodape-base mono">© 2026 nimbushost · projeto prático cpet</p>
      </div>
    </footer>
  );
}
