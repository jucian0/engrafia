import { createTheme, globalCss } from '@nextui-org/react';

export const Global = globalCss({
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
});

export const lightTheme = createTheme({
  type: 'light',
  theme: {},
});

export const darkTheme = createTheme({
  type: 'dark',
  theme: {},
});
