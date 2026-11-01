import FormContato from "../components/FormContato.jsx";

const canais = [
  { rotulo: "e-mail", valor: "suporte@nimbushost.email", href: "mailto:suporte@nimbushost.email" },
  { rotulo: "discord", valor: "discord.gg", href: "https://discord.gg" },
  { rotulo: "telegram", valor: "t.me", href: "https://t.me" },
];

/** @param {{ produto?: string }} props */
export default function Contato({ produto }) {
  return (
    <section className="secao secao-topo">
      <div className="container">
        <p className="rotulo mono">nimbushost / contato</p>
        <h1 className="titulo-pagina">contato</h1>
        <p className="lead-nh">
          dúvida comercial, suporte ou migração.{"\u00a0"}
          {"\n"}uma pessoa lê cada mensagem.
        </p>

        <div className="row g-5 mt-1">
          <div className="col-lg-8">
            <FormContato produtoInicial={produto} />
          </div>
          <aside className="col-lg-4" aria-labelledby="outros-canais">
            <div className="bloco-canais">
              <h2 id="outros-canais" className="titulo-secao">
                OUTROS CANAIS
              </h2>
              <dl>
                {canais.map((c) => (
                  <div key={c.rotulo} className="mb-2">
                    <dt>{c.rotulo}</dt>
                    <dd className="mono">
                      <a href={c.href} rel="noopener noreferrer">
                        {c.valor}
                      </a>
                    </dd>
                  </div>
                ))}
                <div className="mb-2">
                  <dt>horário</dt>
                  <dd className="mono">seg–sex, 8h–22h</dd>
                </div>
                <div>
                  <dt>tempo médio de resposta</dt>
                  <dd className="mono">~ 40 min no horário de atendimento</dd>
                </div>
              </dl>
              <p className="nota">links e números de exemplo.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
