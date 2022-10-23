---
title: 'Customizando'
description: 'Este é um guia lhe ensina com customizar seu app Engrafia.'
---

# Customizando

Engrafia pode ser completamente customizado, e vamos mostrar nesse tutorial como isso pode ser simples.

## Tema

Por padrão, Engrafia exporta dois temas completos, um tema `escuro`, e outro `claro`, esses temas são construídos usando [Next UI](https://nextui.org/), portanto os recursos detalhados na documentação do Next UI podem ser aplicados para personalizar, ou criar um tema novo. Abaixo vamos descrever os passos para isso:

### App.js

Abaixo, temos a configuração padrão do arquivo `App.js`, em um app Engrafia, nele podemos excluir ou personalizar o sistema de temas.

Os temas `darkTheme`, e `lightTheme` são importados do módulo `@engrafia/ui`, e podem ser substituídos por um tema novo, seguindo a documentação do Next UI.

```jsx
import { AppProps } from 'next/app';
import Head from 'next/head';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { darkTheme, lightTheme, Provider } from '@engrafia/ui';

function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Head>
        <title>Welcome to docs!</title>
      </Head>
      <ThemeProvider
        defaultTheme="light"
        attribute="class"
        value={{
          light: lightTheme,
          dark: darkTheme,
        }}
      >
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </NextUIProvider>
  );
}

export default App;
```

### Criando um tema

Para criar um theme, basta criar um arquivo javascrit, e importar a função `createTheme` do pacote `@nextui-org/react`, adicionar um nome, e adicionar configurações de cores, espaçamentos, bordas, sombras, etc.

```js
import { createTheme, globalCss } from '@nextui-org/react';

export const myDarkTheme = createTheme({
  type: 'light',
  theme: {},
});
```

Com esse arquivo criado, basta adicionar ele no Provider de temas em `app.js`.

```jsx
<ThemeProvider
  defaultTheme="light"
  attribute="class"
  value={{
    light: lightTheme,
    dark: myDarkTheme,
  }}
>
  <Provider>
    <Component {...pageProps} />
  </Provider>
</ThemeProvider>
```

## Customizações de layout

O arquivo `theme,config.js`, possui diversas configurações que pode ser entendidas facilmente ao olhar ele, mas vamos passar por cada propriedade explicando-as.

```js
export default {
  title: 'Engrafia',
  description: 'Easily, and delightful documentation website generator!',
  rootDocs: '',
  repository: {
    url: 'http://github.com/jucian0/engrafia',
    branch: 'main',
    author: 'Jucian0',
  },
  nav: {
    logo: <svg></svg>,
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
  },
  footer: {
    text: 'Engrafia 2022',
    logo: <svg></svg>,
  },
  head: ({ title, meta }) => (
    <>
      <title>{title}</title>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
};
```

> Ps: O exemplo acima usa chaves e não dizeres pra nos titulos de links, e campos de busca, essa confugração preve a utilização do sistema de internacionalização, se a documentação não for oferecida em mais de um idioma, as chames podem ser substituidas pelos dizeres.

### Propriedades do `theme.config.js`

| Propriedade   |      Descrição      |
| -------- | ----------- |
| `title` | titulo do app |  
| `description` |   descrição do app    |
| `rootDocs` | nome da pasta que contem o conteúdo do site |
| `repository` | informações referente ao repositório que contem o conteúdo do site, Github, ou Bitbucket|
| `nav` | informações referentes ao menu superior |  
| `footer` | informações referentes ao menu superior |  
| `head` | uma função que recebe metatags que devem ser utilizadas para melhorar o SEO do site e, essa função deve devolver um element JSX |  


### Alterar logo

Alterar logo no menu superior ou no rodapé é uma tarefa simples, ambos trabalham com os mesmo formatos.
O logo do app pode ser substituído por um elemento de imagem, um endereço de uma imagem, ou um elemento JSX, como no exemplo acima.

```jsx

const logo = (
        <svg
        className=""
        fill="none"
        height="36"
        viewBox="0 0 32 32"
        width="36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
      </svg>
)

```

### Customizar Head

O `Head` tem um agrande importância por abrigar algumas tags que fazem com que seu site seja melhor lido e indexado, sem essa configuração os mecanismos de busca podem ter dificuldade em indexar seu conteúdo, e seu site pode ser penalizado com baixa quantidade de visitas.

A configuração pode ser feita por essa sessão do arquivo `theme.config.js`, ou diretamente no arquivo `_document.js`

```jsx
  const head= ({ title, meta }) => (
    <>
      <title>{title}</title>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  )
```