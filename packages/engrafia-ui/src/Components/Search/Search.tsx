import React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { Grid, Input } from '@nextui-org/react';
import { RiSearchFill } from 'react-icons/ri';
import { getThemeConfig } from '../../get-theme-config';
import { useTranslate } from '../../useTranslation';
import * as S from './styles';

const StyledTriggerWithCaret = React.forwardRef(
  ({ children, ...props }: any, forwardedRef) => {
    return (
      <S.StyledTrigger {...props} ref={forwardedRef}>
        {children}
      </S.StyledTrigger>
    );
  }
);

const NavigationMenu = S.StyledMenu;
const NavigationMenuList = S.StyledList;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuTrigger = StyledTriggerWithCaret;
const NavigationMenuLink = S.StyledLink;
const NavigationMenuContent = S.StyledContent;
const NavigationMenuViewport = S.StyledViewport;

const ContentListItem = React.forwardRef(
  ({ children, title, ...props }: any, forwardedRef) => (
    <S.ListItem>
      <NavigationMenuLink
        {...props}
        ref={forwardedRef}
        css={{
          padding: 12,
          borderRadius: 6,
          '&:hover': { backgroundColor: '$gray200' },
        }}
      >
        <S.LinkTitle>{title}</S.LinkTitle>
        <S.LinkText>{children}</S.LinkText>
      </NavigationMenuLink>
    </S.ListItem>
  )
);

const { default: themeConfig } = getThemeConfig();

export const NavigationMenuDemo = () => {
  const t = useTranslate();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            onPointerMove={(e: any) => e.preventDefault()}
            onPointerLeave={(e: any) => e.preventDefault()}
          >
            <RiSearchFill fill="var(--nextui-colors-accents6)" size={16} />
          </NavigationMenuTrigger>
          <NavigationMenuContent
            onPointerEnter={(e: any) => e.preventDefault()}
            onPointerLeave={(e: any) => e.preventDefault()}
          >
            <Grid css={{ padding: '20px' }}>
              <Input
                contentLeft={
                  <RiSearchFill
                    fill="var(--nextui-colors-accents6)"
                    size={16}
                  />
                }
                contentLeftStyling
                autoFocus
                clearable
                animated={false}
                css={{
                  border: '1px solid $gray200',
                  background: '$gray200',
                  w: '100%',
                  '@xsMax': {
                    mw: '300px',
                  },
                  '& .nextui-input-content--left': {
                    h: '100%',
                    ml: '$4',
                    dflex: 'center',
                  },
                }}
                aria-label="Search field"
                placeholder={t(themeConfig.nav?.search_bar ?? 'Search')}
              />
            </Grid>
            <S.ContentList layout="two">
              <ContentListItem
                title="Introduction"
                href="/docs/primitives/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ContentListItem>
              <ContentListItem
                title="Getting started"
                href="/docs/primitives/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ContentListItem>
              <ContentListItem
                title="Styling"
                href="/docs/primitives/overview/styling"
              >
                Unstyled and compatible with any styling solution.
              </ContentListItem>
              <ContentListItem
                title="Animation"
                href="/docs/primitives/overview/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ContentListItem>
              <ContentListItem
                title="Accessibility"
                href="/docs/primitives/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ContentListItem>
              <ContentListItem
                title="Releases"
                href="/docs/primitives/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ContentListItem>
            </S.ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>

      <S.ViewportPosition>
        <NavigationMenuViewport />
      </S.ViewportPosition>
    </NavigationMenu>
  );
};
