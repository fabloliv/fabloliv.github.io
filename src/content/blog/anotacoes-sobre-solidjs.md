---
title: "Anotações sobre SolidJS"
summary: "Algumas notas sobre SolidJS."
pubDate: "2023-03-25"
updatedDate: "2023-03-29"
---

- Para quem está familiarizado com React vai achar o código e o gerenciamento de estados muito parecidos.
- No **React**, quando alguma área da interface é alterada, o _Virtual DOM_ (VDOM) alterado é comparado com uma versão anterior e então atualiza o VDOM atual com as diferenças.
- No **SolidJS** o equivalente ao _useState_ se chama _CreateSignal_, também usa um array com 2 elementos (estado e função atualizadora do estado).
- Funções Componentes são executadas uma única vez quando a aplicação é iniciada.
- Quando o _JSX_ é compilado, os locais com _Signal_ são memorizados.
- Quando o VDOM é atualizado, somente os locais _Signal_ são afetados, sem comparação com versão anterior do VDOM e sem recompilar o componente.
- **SolidJS** se torna mais rápido sem essa comparação: somente áreas reativas sofrem alterações e não o VDOM inteiro.
- **SolidStart** é a alternativa ao **NextJS** e ao **Remix** para criar aplicações _full stack_ com Rotas, <abbr title="Static Site Generation">SSG</abbr> e <abbr title="Server-Side Rendering">SSR</abbr>.
- **SolidJS** pode parecer melhor, mas React ainda é amplamente usado no mercado e possui suporte de uma grande empresa (Meta), ainda conta com uma comunidade de desenvolvedores muito maior e muitas ofertas de emprego.
- O conceito do _Signal_ não é novo, outros frameworks como **Astro** e **Svelte** já usam o conceito conhecido como "ilhas interativas" ou "Arquitetura em Ilhas":

Fontes e referências:

1. Vídeo do [Academind](https://www.youtube.com/@academind): [Is SolidJS the better ReactJS?](https://youtu.be/w14cgW9pVkg)
2. [Astro Islands](https://docs.astro.build/en/concepts/islands/)
