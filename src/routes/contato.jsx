import { createFileRoute } from "@tanstack/react-router";
import Contato from "../pages/Contato.jsx";
import { seo } from "../lib/seo.js";

export const Route = createFileRoute("/contato")({
  // ?produto=<slug> pre-seleciona o select
  validateSearch: (s) => ({
    produto: typeof s.produto === "string" ? s.produto : undefined,
  }),
  head: () =>
    seo(
      "contato · nimbushost",
      "fale com a NimbusHost por formulário, e-mail, discord ou telegram. atendimento de segunda a sábado.",
    ),
  component: PaginaContato,
});

function PaginaContato() {
  const { produto } = Route.useSearch();
  // key forca remontar o form quando o produto da url muda
  return <Contato key={produto ?? "-"} produto={produto} />;
}
