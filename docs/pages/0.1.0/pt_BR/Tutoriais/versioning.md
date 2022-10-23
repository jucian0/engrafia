---
title: 'Versionando'
description: 'Este é um guia lhe ensina com versionar sua documentação, usando Engrafia.'
position: 1
---

# Versionando

Versionamento é uma forma de garantir a consistência das informações, sendo uma versão a representação de um estado do documento, como a documentação deve descrever o processo de uso e recursos de determinado produto,
e quando o produto recebe uma nova funcionalidade, ou alteração, o mesmo recebe uma nova versão que represente o estado atual do produto, mantendo o estado anterior acessível, com a documentação não deve diferir, a cada nova versão do produto é necessário gerar uma nova versão de documentação descrevendo como a versão atual funciona, etc.

Engrafia possui esse recurso de forma nativa, criar versões para seus documentos é bem simples, e pode ser feito de duas formas como você pode ver nos exemplos abaixo:

## Iniciando um app com versionamento

A melhor maneira de iniciar um app Engrafia com versionamento é usando o `create engrafia` e selecionando o template `versioned`, essa opção gera um app básico com esquema de versionamento.

```mdx
    engrafia-app
      - pages
        - 0.0.0
          - page-examples
```

Essa estrutura de pasta é criada como exemplo de como gerar conteúdos versionados, no exemplo acima, temos a versão `0.0.0`, altere para a versão desejada. Outro ponto, após alterar para a versão desejada, é necessário alterar possíveis links que apontem para a versão anterior.

```js

    // theme.config.js
    ...
    links: [
      {
        title: 'link.docs',
        url: '/0.0.0/quick-start',
      },
    ...
    ],
```

## Adicionando versionamento em um app

É importante salientar que qualquer pasta dentro de `pages`, que atenda a regex de versionamento semântico vai ser tratada como uma versão diferente dos conteúdos,
então quando surgir a necessidade de criar uma versão, basta criar uma pasta com um nome que atenda aos requisitos de versionamento do versionamento semântico. Exemplos: `1.0.0`, `1.0.1-1`.

> Versionamento semantico [docs](https://semver.org/)

![versioning-semantic-version](/versioning.png)

## Alterando entre versões

Para alterar entre versões em um app Engrafia, basta selecionar a versão no seletor de versão no canto superior direito da tela, o alterar a URL da página.
