import { createTheme, globalCss } from '@nextui-org/react';

export const GlobalStyles = globalCss({
  '.title': {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '.gg-link': {
      marginInlineEnd: 10,
    },
  },
  img: {
    borderRadius: '$md',
  },
  blockquote: {
    borderRadius: '$md',
  },
  pre: {
    padding: '0',
  },
  'h1 , h2 , h3 , h4 , h5 , h6': {
    scrollMarginTop: `5rem`,
  },
  span: {},

  p: {
    fontSize: '1.125rem',
  },
});

export const lightTheme = createTheme({
  type: 'light',
  theme: {},
});

export const darkTheme = createTheme({
  type: 'dark',
  theme: {},
});
