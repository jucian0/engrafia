---
title: 'Tradução'
description: 'Este é um guia lhe ensina com criar conteúdos em diversos idiomas, com Engrafia.'
position: 0
---

# Tradução

Tão importante quanto ter um conteúdo de qualidade, é ter o esmo em mais de um idioma disponível, ainda mais ao ter um público internacional.

O Engrafia permite que você internacionalize seu conteúdo de forma simples e rápida, veja nos exemplos abaixo como tornar seu conteúdo disponível em diversos idiomas.

## Criando uma aplicação

A melhor maneira de criar uma documentação disponível em diversos idiomas, é rodando o comando `create engrafia`, e selecionando o template `i18n`, essa opção gera um app com as configurações de versionamento pronto.

```mdx
    engrafia-app
      - pages
        - docs
          - page-examples.en
```

Essa estrutura de pasta é criada como exemplo de como gerar conteúdos com tradução, no exemplo acima, temos o idioma `pt_BR`, você pode criar uma nova pasta para o idioma que deseja usar, exemplo `en_US`.

## Adicionando um novo idioma em um app

É importante salientar que qualquer pasta com nome que atenda a regex para idiomas dentro de `pages`, vai ser tratada como uma pasta de idioma, exemplo, `es_ES`, dito isso, a primeira coisa a ser feita é criar a pasta do novo idioma, `en_US`.

Outro ponto a ser alterado é o arquivo `i18n.config.json`, como o Engrafia não tem muitos textos para serem traduzidos, sugerimos seguir adicionando os dizeres nos diferentes idiomas, seguindo o exemplo abaixo.

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
      "search.placeholder": "Buscar..."
    },
    "en_US": {
      "description": "This is a documentation example",
      "link.docs": "Docs",
      "link.github": "Github",
      "edit.content": "Edit this content",
      "table.of.content": "Page content",
      "search.placeholder": "Search..."
    }
  }
}
```

Você vai perceber que no arquivo `theme.config.js`, não é passado os dizeres diretamente, mas sim chaves que representam um valor específico no arquivo `i18n.config.json`, isso garante que você consiga ter vários idiomas configurados, e podendo customizar até mesmo as chaves que usa.

```js
    links: [
      {
        title: 'link.docs',
        url: '/0.1.0/pt_BR/quick-start',
      },
      {
        title: 'link.github',
        url: 'http://github.com/jucian0/engrafia',
      },
    ],
    search_bar: 'search.placeholder',
```

![versioning-semantic-version](/versioning.png)

## Alterando entre idiomas

Para alterar entre idiomas em um app Engrafia, basta selecionar o idioma no seletor de idioma no canto superior direito da tela, o alterar a URL da página.

> PS: Você também pode optar por ter um site de documentação com apenas um idioma por exmeplo o Ingles, nesse caso você pode exluir o arquivo `i18n.config.json`, e adicionar os dizeres diretamente no arquivo `theme.config.js`
