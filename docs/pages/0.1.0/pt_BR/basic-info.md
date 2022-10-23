---
title: 'Informações básicas'
description: 'Informações básica sobre as principais configurações do Engrafia.'
position: 1
---

# Informações básicas

Engrafia usa um sistema de leitura de pastas para organizar o contúdo em categorias, cada pasta se torna uma categoria no menu lateral, não é necessário inserir nenhuma informação em relação a categoria do conteúdo nos arquivos, apenas a posição que o conteúdo aparece na categoria pode ser informado se necessário.

Engrafia usa arqauivos `md`, `mdx` para gerar páginas.

## Pasta de conteúdos

Todos os conteúdos devem estar na pasta de `pages`, seguindo as regras para versionamento e internacionalização, se esse for o caso.

```mdx
    engrafia-app
      - pages
        - 0.0.0
          - en_US
            - page-examples
          - pt_BR
            - page-examples
        - 0.0.1
          - en_US
            - page-examples
          - pt_BR
            - page-examples
```

## _app.js

_app.js é o arquivo de entrada da aplicação Engrafia, não existe muita configuração a ser feita nele, a menos que seja necessário alterar o tema ou coisas relacionadas a estilização (css).

## _document.js

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