---
title: "Meu site agora é feito com Astro"
summary: "Concluí a conversão do meu site para Astro"
pubDate: "2023-03-20"
updatedDate: "2023-03-20"
---

Concluí a conversão do meu site para o Astro! Conforme for estudando mais vou criando uma nova versão pra esse site. E espero manter um ritmo de postagem no blog.

Quero adicionar uma seção com os últimos experimentos que estão no Github.

### Statik para Astro

A versão anterior foi construída com o gerador de sites estáticos feito em Python, o [Statik](https://github.com/thanethomson/statik). Por acaso a estrutura já estava quase pronta, só trocando as tags nos templates do **Jinja2** e passando pro código do Astro. Onde haviam alguns `includes` no lugar entraram componentes:

```html
{% include 'nav.html' %}
```

O arquivo se tornou o componente Nav:

```jsx
<Nav />
```

### Sobre o Astro

Tô achando bem mais fácil, a estrutura fica parecida com projetos React e NextJS, pra criar sites mais simples e rápidos e ainda podendo incluir e misturar componentes de diferentes frameworks de UI.
