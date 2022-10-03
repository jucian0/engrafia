import { styled, css, cssHideShowIn } from '@nextui-org/react';

export const SidebarWrapper = styled(
  `aside`,
  {
    top: '1rem',
    display: `flex`,
    position: `relative`,
    flexDirection: `column`,
    maxWidth: `15.62rem`,
    width: `15.62rem`,
    minWidth: `15.62rem`,
    overflow: `auto`,
    '.wrapper': {
      position: `fixed`,
    },
  },
  cssHideShowIn
);

export const List = styled(`ul`, {
  listStyle: `none`,
  margin: 0,
  paddingLeft: `1rem`,
});

export const Item = styled(`li`, {
  position: `relative`,
  paddingLeft: `1rem`,
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
  padding: `0.1rem 0`,
  fontSize: `1rem`,
  fontWeight: `$normal`,
  [Tag.toString()]: {
    background: `$accents8`,
  },
});

export const active = css({
  '& a': {
    fontWeight: `$medium`,
    color: `$text`,
  },
});

export const inactive = css({
  fontWeight: `$normal`,
  '& a': {
    color: `$accents8`,
  },
});
