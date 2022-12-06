---
title: Customization
description: This doc will guide you through the Engrafia customization, like themes, colors, and pages.
tags: react, docs, nextjs, theme, styles
---

# Customization

Engrafia allows you to create custom pages, like, home,404, or other pages, with a clean layout, and also allows you to customize your docs layout too, you can do that by editing the theme, creating your own theme, and changing the logo.

## Creating a custom page

To create a custom page, it's necessary that the new page be created in `pages` directory, not in `docs`, pages located in docs will be displayed as a doc page with the layout of the doc.

Custom pages can be created by using `md`, and `mdx`, or javascript files.

### Javascript example

In this example we are using Javascript, you can also use Typescript.

```jsx
//exports the page metadata
export const getStaticProps = async () => {
  return {
    props: {
      meta: {
        title: 'My custom page',
        description: 'This is a custom page example',
        tags: 'docs, documentation, nextjs',
      },
    },
  };
};

//exports the page content
export default function MyCustomPage() {
  return <>...my page content</>;
}
```

### MD, MDX example

This example, show us hot to use MD, and MDX files. MDX, and MD files have some differences, you can read about them in [MD and MDX](/docs/0.1.0/features/md-mdx.en)

```md
---
title: 'My custom page'
description: 'This is a custom page example'
position: 4
---

# MD e MDX

Engrafia uses `md`, and `mdx`...

## my page content
```

## Changing theme

Engrafia UI uses [Next UI](https://nextui.org/) to create the user interfaces, so, it's important to know the minimum about it to customize your website.

### Creating a new theme

By default Engrafia UI exports two themes, a `darkTheme`, and a `lightTheme`, those themes are used by default in Engrafia, but you can customize these themes, or create your theme, following this example, below:

```js
import { createTheme, NextUIProvider, Text } from '@nextui-org/react';

// 2. Call `createTheme` and pass your custom values
export const darkTheme = createTheme({
  type: 'dark', // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd',

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});
```

### Applying the theme

To apply a new theme you should open the `_app.js` file, and import the theme that you have created.

```jsx
import { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { Provider, lightTheme } from 'engrafia';
import { darkTheme } from 'your-theme.js';

function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
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

## Changing basic information

To change basic information it's necessary to edit the `theme.config.js`, and check the properties you want to change.

### title

Represents the title of the website, and accepts a `string`.

### description

Represents the description of the website, and accepts a `string`.

### rootDocs

Represents the root of the content of the docs, every file inside there will be rendered with docs layout, accepts a `string`.

### repository

This property can be ignored if your website does not have a git repository, or you don't want to expose a button to edit the content.

- branch
- url
- author

### nav

- logo - it accepts an SVG code or a source of an image.
- textLogo - it accepts a `string` and will be displayed next to the logo image.
- links - is an object with `title`, `url`, and options property `external`, witch means that this is an external link, and should be opened in a new tab.
- search_bar: accepts a `string`, which can be a label value, or a key value, in case of the website uses internationalization.

### footer

- text - it will be displayed next to the `logo`, or `textLogo`, it accepts a `string`.
- logo - it accepts an SVG code or a source of an image.
- textLogo - it accepts a `string` and will be displayed next to the logo image.

### head

This property accepts a function that has an object as a parameter, that contains the `title`, and the `metadata` of the site.
The `head` property should return a `jsx` value with the meta tags that you want to use in your website, for example:

```jsx
  head: ({ title, meta }) => (
   <>
     <link rel="shortcut icon" href="/favicon.ico" />
     <title>{meta.title}</title>
     {meta.description && (
       <meta name="description" content={meta.description} />
     )}
   </>
 ),
```

Meta tags is better covered in [SEO](/docs/0.1.0/features/seo.en)
