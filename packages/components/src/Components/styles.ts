import { styled, css } from '@nextui-org/react';

export const SidebarWrapper = styled(`aside`, {
  display: `flex`,
  position: `relative`,
  flexDirection: `column`,
  maxWidth: `15.62rem`,
  width: `15.62rem`,
  minWidth: `15.62rem`,
  padding: `0.5rem 0`,
  overflow: `auto`,
  //borderRight: `1px solid $borderColor`,
  top: `3.797rem`,

  [`@media (max-width: 48rem)`]: {
    backgroundColor: `$background`,
    position: `fixed`,
    left: 0,
    height: `calc(100% - 3.797rem)`,
    zIndex: `$1`,
    boxShadow: `$right`,
  },
  '.wrapper': {
    position: `fixed`,
  },
});

export const List = styled(`ul`, {
  listStyle: `none`,
  paddingLeft: `1rem`,
});

export const Item = styled(`li`, {
  position: `relative`,
});

export const Category = styled(`span`, {
  display: `block`,
  paddingBlock: `0.5rem`,
  border: `1px solid transparent`,
  fontWeight: `$medium`,
  fontSize: `1.125rem`,
  color: `$normalText`,
});

export const Tag = styled(`div`, {
  width: `4px`,
  height: `4px`,
  marginInlineEnd: `0.5rem`,
  background: `$textHeading`,
  borderRadius: `$round`,
});

export const Link = styled(`span`, {
  display: `flex`,
  alignItems: `center`,
  padding: `0.7rem`,
  fontSize: `1rem`,
});

export const active = css({
  color: `$normalText`,
  fontWeight: `$medium`,
});

export const inactive = css({
  color: `$textHeading`,
  fontWeight: `$light`,
});
