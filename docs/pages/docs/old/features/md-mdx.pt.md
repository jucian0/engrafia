---
title: 'MD e MDX'
description: 'Este é um guia descreve o que são arquivos md, e mdx'
position: 4
---

import { Button } from '@nextui-org/react';

# MD e MDX

Engrafia permite que páginas sejam escritas usando, arquivos, `md`x `mdx`, ou mesmo arquivos `js`.

## O que são arquivos .md?

Markdown é uma linguagem de marcação leve que você pode usar para adicionar elementos de formatação a documentos de texto simples. Criado por John Gruber em 2004, o Markdown é agora uma das linguagens de marcação mais populares do mundo.

Arquivos markdown the permite criar documentos de texto de forma simples, com ele é possível adicionar qualquer elemento HTML, seguindo uma forma própria de declarar os mesmos.

> Veja mais sobre Markdown em [Docs](https://www.markdownguide.org/getting-started/)

Exemplo:

```mdx
# Escrevendo arquivos MD e MDX

## O que são arquivos .md?

Markdown é uma linguagem de marcação leve que você pode usar para adicionar elementos de formatação a documentos de texto simples. Criado por John Gruber em 2004, o Markdown é agora uma das linguagens de marcação mais populares do mundo.

Arquivos markdown the permite criar documentos de texto de forma simples, com ele é possível adicionar qualquer elemento HTML, seguindo uma forma própria de declarar os mesmos.

> Veja mais em [Docs](https://www.markdownguide.org/getting-started/)
```

```md
# H1 heading

## H2 heading

This is a list in markdown:

- One
- Two
- Three
```

## O que são arquivos .mdx?

Arquivos `.mdx` possuem os mesmo recursos dos arquivos `.dm`, como formatação, recuo, tabela, porem o `mdx`, alem de tudo isso possui a capacidade de renderizar componentes ReactJs, isso lhe garante um poder de construção de conteúdos muito grande, veja um exemplo abaixo:

```mdx
import { MyComponent } from './my-library';

<MyComponent />

//or

export function MyComponent() {
  return <h1>My Component</h1>;

}
```

> Saiba mais sobre MDX em [Docs](https://mdxjs.com/)
