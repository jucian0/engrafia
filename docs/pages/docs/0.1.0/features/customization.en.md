---
title: 'Customization'
description: 'This doc will guide you through the Engrafia customization, like themes, colors, and pages.'
tags: react, docs, nextjs, theme, styles
---

# Customization

Engrafia allow you to create custom pages, like, home,404, or another pages, with a clean layout, and also allow to customize your docs layout too, you can do that by editing the theme, or creating your own theme, changing logo.

## Creating a custom page

To create a custom page, it's necessary that the new page be created in `pages` directory, not in `docs`, pages located in docs will be displayed as a doc page with the docs layout.

Custom pages can be created by using `md`, `mdx`, or javascript files.


### Javascript example
This example we are using Javascript, you cal also use Typescript.

```jsx
export const getStaticProps = async () => {
  return {
    props: {
      data: {
        title: 'My custom page',
        description: 'This is a custom page example',
        tags: 'docs, documentation, nextjs',
      },
    },
  };
};

export default function MyCustomPage(){
    return (
        <>...my page content</>
    )
}
```

### MD, MDX example

MDX, and MD files has some differences, you can read about it in [MD and MDX](/docs/0.1.0/features/md-mdx.en)

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

Engrafia UI uses [Next UI](https://nextui.org/) to create the user interfaces, so, you can find appropriated to read, and learn about this UI library.

### Creating a new theme
Also Engrafia UI exports two themes, a `darkTheme`, and a `lightTheme`, those themes are used by default in Engrafia, but you can customize theses themes, or create your personal theme, following this example, bellow:

```js
import { createTheme, NextUIProvider, Text } from "@nextui-org/react"

// 2. Call `createTheme` and pass your custom values
export const darkTheme = createTheme({
  type: "dark", // it could be "light" or "dark"
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

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})
```

### Applying the theme

To apply a new theme you should open the `a_app.js` file, and import the theme that you have created.

```jsx
import { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { Provider, lightTheme } from '@engrafia/ui';
import {darkTheme} from 'your-theme.js'

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