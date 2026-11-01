import { useEffect, useId } from "react";

/**
 * Accordion: um aberto por vez, abre pelo hash da url (#ativacao).
 * @param {{ itens: { id: string, pergunta: string, resposta: string }[] }} props
 */
export default function Faq({ itens }) {
  const grupoId = `faq-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  useEffect(() => {
    let cancelado = false;
    let limpar = () => {};
    // bootstrap acessa o documento: carregar apenas depois da hidratação.
    import("bootstrap/js/dist/collapse").then(({ default: Collapse }) => {
      if (cancelado) return;
      const grupo = document.getElementById(grupoId);
      if (!grupo) return;
      const paineis = itens.flatMap((item) => {
        const painel = document.getElementById(`${item.id}-resposta`);
        if (!painel) return [];
        const instancia = Collapse.getOrCreateInstance(painel, { toggle: false, parent: grupo });
        const aoAbrir = () => {
          const url = new URL(window.location.href);
          url.hash = item.id;
          history.replaceState(history.state, "", url);
        };
        const aoFechar = () => {
          if (window.location.hash !== `#${item.id}`) return;
          const url = new URL(window.location.href);
          url.hash = "";
          history.replaceState(history.state, "", url);
        };
        painel.addEventListener("shown.bs.collapse", aoAbrir);
        painel.addEventListener("hidden.bs.collapse", aoFechar);
        return [{ item, painel, instancia, aoAbrir, aoFechar }];
      });
      const abrirPeloHash = () => {
        const atual = paineis.find(({ item }) => `#${item.id}` === window.location.hash);
        if (!atual) return;
        atual.instancia.show();
        document.getElementById(atual.item.id)?.scrollIntoView({ block: "start" });
      };
      abrirPeloHash();
      window.addEventListener("hashchange", abrirPeloHash);
      limpar = () => {
        window.removeEventListener("hashchange", abrirPeloHash);
        paineis.forEach(({ painel, instancia, aoAbrir, aoFechar }) => {
          painel.removeEventListener("shown.bs.collapse", aoAbrir);
          painel.removeEventListener("hidden.bs.collapse", aoFechar);
          instancia.dispose();
        });
      };
    });
    return () => {
      cancelado = true;
      limpar();
    };
  }, [itens, grupoId]);

  return (
    <div className="faq" id={grupoId}>
      {itens.map((item, n) => {
        return (
          <div className="faq-item" id={item.id} key={item.id}>
            <h2 className="faq-titulo">
              <button
                type="button"
                className="faq-botao collapsed"
                aria-expanded="false"
                aria-controls={`${item.id}-resposta`}
                data-bs-toggle="collapse"
                data-bs-target={`#${item.id}-resposta`}
              >
                <span className="mono faq-num">{String(n + 1).padStart(2, "0")}</span>
                <span className="flex-grow-1">{item.pergunta}</span>
                <span className="mono faq-sinal" aria-hidden="true" />
              </button>
            </h2>
            <div id={`${item.id}-resposta`} className="collapse" data-bs-parent={`#${grupoId}`} role="region" aria-label={item.pergunta}>
              <div className="faq-resposta"><p>{item.resposta}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
