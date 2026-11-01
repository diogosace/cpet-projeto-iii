import { createFileRoute } from "@tanstack/react-router";
import PaginaFaq from "../pages/Faq.jsx";
import { seo } from "../lib/seo.js";

export const Route = createFileRoute("/faq")({
  head: () =>
    seo(
      "perguntas frequentes · nimbushost",
      "ativação, pagamento, vencimento, suspensão, backup, migração, ssl, upgrade, reembolso e suporte.",
    ),
  component: PaginaFaq,
});
