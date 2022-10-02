import { styled, css } from '@nextui-org/react';

export const SidebarWrapper = styled(`aside`, {
  display: `flex`,
  position: `relative`,
  flexDirection: `column`,
  maxWidth: `15.62rem`,
  width: `15.62rem`,
  minWidth: `15.62rem`,
  overflow: `auto`,
  //borderRight: `1px solid $borderColor`,
  //top: `3.797rem`,

  // [`@media (max-width: 48rem)`]: {
  //   position: `fixed`,
  //   left: 0,
  //   height: `calc(100% - 3.797rem)`,
  //   zIndex: `$1`,
  //   boxShadow: `$right`,
  // },
  // '.wrapper': {
  //   position: `fixed`,
  // },
});

export const List = styled(`ul`, {
  listStyle: `none`,
  margin: 0,
  paddingLeft: `1rem`,
});

export const Item = styled(`li`, {
  position: `relative`,
  padding: 0,
});

export const Category = styled(`span`, {
  display: `block`,
  paddingBlock: `0.5rem`,
  border: `1px solid transparent`,
  fontWeight: `$medium`,
  fontSize: `1.125rem`,
  color: `$text`,
});

export const Tag = styled(`div`, {
  width: `4px`,
  height: `4px`,
  marginInlineEnd: `0.5rem`,
  background: `$primary`,
  borderRadius: `$rounded`,
});

export const Link = styled(`span`, {
  display: `flex`,
  alignItems: `center`,
  padding: `0.7rem 0`,
  fontSize: `1rem`,
  '& a': {
    color: `$accents8`,
  },
  [Tag.toString()]: {
    background: `$accents8`,
  },
});

export const active = css({
  color: `$accents8`,
  fontWeight: `$medium`,
});

export const inactive = css({
  color: `$accents8`,
  fontWeight: `$light`,
});
