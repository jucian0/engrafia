import { styled, css, cssHideShowIn } from '@nextui-org/react';

export const TableOfContentWrapper = styled(
  `aside`,
  {
    display: `flex`,
    flexDirection: `column`,
    position: `relative`,
    maxWidth: `15.62rem`,
    minWidth: `15.62rem`,
    overflow: `auto`,
    top: `1.5rem`,

    ul: {
      margin: '1rem ',
    },

    h3: {
      fontSize: `1.125rem`,
      color: `$text`,
      fontWeight: `$medium`,
      margin: `0`,
    },

    div: {
      position: 'fixed',
    },
  },
  cssHideShowIn
);

export const ItemLink = styled(`li`, {
  display: `block`,
  textDecoration: `none`,
  fontSize: `.8rem`,
  lineHeight: `1.5`,
  transition: `all 0.2s ease-in-out`,
  padding: '0.1rem 0',
});

export const active = css({
  fontWeight: `$medium`,
  '& a': {
    color: `$text`,
  },
});

export const inactive = css({
  '& a': {
    color: `$accents8`,
  },
  fontWeight: `$light`,
});
