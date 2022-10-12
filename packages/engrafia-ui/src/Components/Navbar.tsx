import { Navbar, Button, Text, Input, Grid } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { RiMoonFill, RiSearchFill, RiSunFill } from 'react-icons/ri';
import { getI18nConfig } from '../get-i18n';
import { getThemeConfig } from '../get-theme-config';
import { useSiteConfig } from '../Provider';
import { useTranslate } from '../useTranslation';

import { LanguageSelector } from './LanguageSelector/Selector';
import { NavigationMenuDemo } from './Search/Search';
import { Sidebar } from './Sidebar/Sidebar';
import { VersionSelector } from './VersionSelector/Selector';

const { default: themeConfig } = getThemeConfig();
const i18nConfig = getI18nConfig();
const locales = Object.keys(i18nConfig?.translations ?? {});

export default function MenuNav() {
  const { theme, setTheme } = useTheme();
  const { versions, languages } = useSiteConfig();
  const t = useTranslate();

  return (
    <Navbar variant="sticky" isBordered={theme === 'dark'} maxWidth="fluid">
      <Grid.Container
        wrap="nowrap"
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '87.5rem',
          margin: 'auto',
        }}
      >
        <Navbar.Brand>
          <Link href="/">{themeConfig.nav?.logo}</Link>
          <Link href="/">
            <Text b color="inherit" hideIn="xs">
              {themeConfig.title}
            </Text>
          </Link>
        </Navbar.Brand>
        <Grid.Container
          wrap="nowrap"
          css={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          {themeConfig.nav?.links && (
            <Navbar.Content
              activeColor={'primary'}
              hideIn="xs"
              variant="default"
            >
              {themeConfig.nav?.links.map((link) => (
                <Navbar.Link key={link.url} href={link.url}>
                  {t(link.title)}
                </Navbar.Link>
              ))}
            </Navbar.Content>
          )}
        </Grid.Container>
        <Grid.Container
          wrap="nowrap"
          css={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Navbar.Content
            css={{
              '@xsMax': {
                w: '100%',
                jc: 'space-between',
              },
            }}
          >
            {/* <Navbar.Item
              css={{
                '@xsMax': {
                  w: '100%',
                  jc: 'center',
                },
              }}
            >
              <Input
                clearable
                contentLeft={
                  <RiSearchFill
                    fill="var(--nextui-colors-accents6)"
                    size={16}
                  />
                }
                contentLeftStyling
                css={{
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
            </Navbar.Item> */}

            <NavigationMenuDemo />
            <Navbar.Item>
              <Button
                icon={
                  theme === 'dark' ? (
                    <RiSunFill fill="var(--nextui-colors-accents6)" size={16} />
                  ) : (
                    <RiMoonFill
                      fill="var(--nextui-colors-accents6)"
                      size={16}
                    />
                  )
                }
                auto
                light
                rounded
                color="default"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              />
            </Navbar.Item>
          </Navbar.Content>
          <Navbar.Collapse>
            <Sidebar hide={false} />
          </Navbar.Collapse>
          <Navbar.Content activeColor={'primary'} hideIn="xs" variant="default">
            {locales && <LanguageSelector />}
            {versions && versions.length > 0 && <VersionSelector />}
          </Navbar.Content>
        </Grid.Container>
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
      </Grid.Container>
    </Navbar>
  );
}
