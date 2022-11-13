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
      position:'relative'

    },
    li:{
      position:'relative'
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

export const Line = styled('div',{
  position:'absolute !important',
  left:-5,
  top:10,
  height:'calc(100% - 20px)',
  borderLeft: '1px solid  $gray200',
  borderBottom: '1px solid  $gray200',

  width:15,
  borderEndStartRadius:5
})

export const Another = styled('div',{
  position:'absolute !important',
  top:10,
  left:-7,
  height:5,
  width:5,
  background: '$gray200',
  borderRadius:5
})

export const ItemLink = styled(`span`, {
  display: `block`,
  textDecoration: `none`,
  fontSize: `.8rem`,
  lineHeight: `1.5`,
  transition: `all 0.2s ease-in-out`,
  padding: '0.1rem',
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
