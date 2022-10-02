import { styled, css } from '@nextui-org/react';

export const TableOfContentWrapper = styled(`aside`, {
  display: `flex`,
  flexDirection: `column`,
  position: `relative`,
  maxWidth: `15.62rem`,
  minWidth: `15.62rem`,
  padding: `2rem 1rem`,
  overflow: `auto`,
  //borderLeft: `1px solid $borderColor`,
  top: `3.797rem`,

  [`@media (max-width: 48rem)`]: {
    display: `none`,
  },

  ul: {
    paddingLeft: `0`,
    marginTop: `0.5rem`,
  },

  h3: {
    fontSize: `1.125rem`,
    color: `$normalText`,
    fontWeight: `$medium`,
    margin: `0`,
    padding: `0 0.5rem`,
  },

  div: {
    position: 'fixed',
  },
});

export const ItemLink = styled(`li`, {
  display: `block`,
  textDecoration: `none`,
  fontSize: `.8rem`,
  lineHeight: `1.5`,
  padding: `0.5rem`,
  transition: `all 0.2s ease-in-out`,
});

export const active = css({
  color: `$normalText`,
  fontWeight: `$medium`,
});

export const inactive = css({
  color: `$textHeading`,
  fontWeight: `$light`,
});
