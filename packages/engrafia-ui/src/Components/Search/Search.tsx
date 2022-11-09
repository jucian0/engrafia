import React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { FormElement, Grid, Input, Text } from '@nextui-org/react';
import { RiSearchFill } from 'react-icons/ri';
import { useTranslation } from '../../useTranslation';
import * as S from './styles';
import { DocFile } from '../../get-sidebar';
import { filterItems, getSearchableList } from './utils';
import { search } from 'fast-fuzzy';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEngrafiaConfig } from '../../EngrafiaProvider';

const StyledTriggerWithCaret = React.forwardRef(
  (
    { children, ...props }: React.PropsWithChildren<any>,
    forwardedRef: React.Ref<HTMLAnchorElement>
  ) => {
    return (
      <S.StyledTrigger {...props} ref={forwardedRef}>
        {children}
      </S.StyledTrigger>
    );
  }
);

const ContentListItem = React.forwardRef(
  (
    {
      children,
      title,
      ...props
    }: React.PropsWithChildren<{ title: string; href: string }>,
    forwardedRef: React.Ref<HTMLAnchorElement>
  ) => (
    <S.ListItem>
      <Link {...props}>
        <S.StyledLink ref={forwardedRef}>
          <S.LinkTitle>{title}</S.LinkTitle>
          <S.LinkText>{children}</S.LinkText>
        </S.StyledLink>
      </Link>
    </S.ListItem>
  )
);

export const Search = () => {
  const t = useTranslation();
  const [list, setList] = React.useState([] as DocFile[]);
  const [input, setInput] = React.useState('');
  const { locale } = useRouter();

  const { version, sidebar, themeConfig } = useEngrafiaConfig();

  const searchableContent = React.useMemo(() => {
    return sidebar.name ? getSearchableList(sidebar, locale as '') : [];
  }, [sidebar, version, locale, themeConfig]);

  function handleSetList(e: React.ChangeEvent<FormElement>) {
    setInput(e.target.value);
    const data = search(e.target.value, searchableContent, {
      keySelector: (obj) => obj.meta.title,
    });

    if (data.length === 0) {
      const data = search(e.target.value, searchableContent, {
        keySelector: (obj) => obj.meta.description,
      });
      setList(filterItems(data));
    } else {
      setList(filterItems(data));
    }
  }

  return (
    <S.StyledMenu>
      <S.StyledList>
        <NavigationMenuPrimitive.Item>
          <StyledTriggerWithCaret
            onPointerMove={(e: any) => e.preventDefault()}
            onPointerLeave={(e: any) => e.preventDefault()}
          >
            <RiSearchFill fill="var(--nextui-colors-accents6)" size={16} />
          </StyledTriggerWithCaret>
          <S.StyledContent
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
                onChange={handleSetList}
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
            <S.ContentList>
              {list.map((content) => (
                <ContentListItem
                  key={content.url}
                  title={content.meta.title}
                  href={content.url}
                >
                  {content.meta.description}
                </ContentListItem>
              ))}
            </S.ContentList>
            {list.length === 0 && (
              <Grid
                css={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                {input.length === 0 ? (
                  <Text size="$3xl">Start to search by typing...</Text>
                ) : (
                  <Text size="$3xl">No results found for your search!</Text>
                )}
              </Grid>
            )}
          </S.StyledContent>
        </NavigationMenuPrimitive.Item>
      </S.StyledList>

      <S.ViewportPosition>
        <S.StyledViewport />
      </S.ViewportPosition>
    </S.StyledMenu>
  );
};
