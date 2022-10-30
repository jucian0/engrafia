---
title: 'Basic info'
description: 'Basic information about how Engrafia works.'
position: 1
tags: docs, engrafia, nextjs
socialImage: /code.png
---

# Basic info

Engrafia uses a field system to organize e create categories, and menus, so, you don't need to worry about routes, menus or other things, every file becomes a new menu entry, and every folder becomes a category menu. If you want to organize your menu, you can add a new metadata `position`, this metadata will organize the order of menu items.

Another important thing, is that Engrafia uses `md`, and `mdx` file to create contents, and javascript files to create custom pages, like `404`, `home`.

## Content folder

All contents should be in `pages` folder, fallowing the versioning rules, if it's the case.

```mdx
    engrafia-app
      - pages
        - 0.0.0
          - page-examples
        - 0.0.1
          - page-examples
```

## \_app.js

\_app.js é o arquivo de entrada da aplicação Engrafia, não existe muita configuração a ser feita nele, a menos que seja necessário alterar o tema ou coisas relacionadas a estilização (css).

## \_document.js

Assim como `_app.js`, não é um arquivo comumente alterado, salvo em casos de customização de estilo, ou adicionar mais meta tags.

```jsx
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { GlobalStyles } from '@engrafia/ui';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          {CssBaseline.flush()}
          {GlobalStyles()}
          <link href="https://css.gg/link.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

## i18n.config.json

Este é um arquivo opcional, deve ser descartado se o app não possui internacionalização, ele é usado exclusivamente para fins de internacionalização.

```json
{
  "default": "en_US",
  "translations": {
    "pt_BR": {
      "description": "Este é um exemplo de documentação",
      "link.docs": "Documentação",
      "link.github": "Github",
      "edit.content": "Edite esse conteúdo",
      "table.of.content": "Conteúdos da página",
      "search.placeholder": "Search..."
    },
    "en_US": {}
  }
}
```

## theme.config.js

Este arquivo é o mais importante, em termos de configuração, não deve ser descartado sob nenhuma hipótese, ele é responsável por prover a configuração de estilo de menus, informações básicas do site, e mais.

## sidebar.json

Arquivo gerado automaticamente, não deve ser alterado, este arquivo apresenta uma árvore de dados usada para criar o menu lateral.
