import { Link } from "@tanstack/react-router";
import Logo from "./Logo.jsx";

const abas = [
  { to: "/", rotulo: "empresa" },
  { to: "/produtos", rotulo: "produtos" },
  { to: "/contato", rotulo: "contato" },
  { to: "/faq", rotulo: "faq" },
];

export default function Header() {
  return (
    <header className="topo">
      <div className="container topo-linha">
        <Link to="/" aria-label="nimbushost, página inicial" className="topo-marca">
          <Logo />
        </Link>
        <nav aria-label="Principal">
          <ul className="topo-menu">
            {abas.map((aba) => (
              <li key={aba.to}>
                <Link
                  to={aba.to}
                  activeOptions={{ exact: aba.to === "/" }}
                  activeProps={{ className: "ativo", "aria-current": "page" }}
                >
                  {aba.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
