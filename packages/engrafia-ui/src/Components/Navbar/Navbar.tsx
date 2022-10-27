import { Navbar, Button, Text, Grid } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { getI18nConfig } from '../../get-i18n';
import { getThemeConfig } from '../../get-theme-config';
import { useSiteConfig } from '../../Provider';
import { useTranslate } from '../../useTranslation';

import { LanguageSelector } from '../LanguageSelector/Selector';
import { NavigationMenuDemo } from '../Search/Search';
import { Sidebar } from '../Sidebar/Sidebar';
import { VersionSelector } from '../VersionSelector/Selector';

const { default: themeConfig } = getThemeConfig();
const i18nConfig = getI18nConfig();
const locales = Object.keys(i18nConfig?.translations ?? {});

export default function MenuNav() {
  const { theme, setTheme } = useTheme();
  const { versions } = useSiteConfig();
  const t = useTranslate();
  const router = useRouter();
  const isRoot = router.route.includes(themeConfig.rootDocs ?? 'docs');
  console.log(versions, isRoot);

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
          <Link href="/">
            <a>{themeConfig.nav?.logo}</a>
          </Link>
          <Link href="/">
            <a>
              <Text b color="inherit" hideIn="xs">
                {themeConfig.title}
              </Text>
            </a>
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
              {themeConfig.nav?.links.map((link) => {
                if (link.external) {
                  return (
                    <Navbar.Link key={link.url} href={link.url}>
                      {t(link.title)}
                    </Navbar.Link>
                  );
                }
                return (
                  <Link key={link.url} href={link.url}>
                    <Navbar.Link>{t(link.title)}</Navbar.Link>
                  </Link>
                );
              })}
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
                jc: 'flex-end',
              },
            }}
          >
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
                animated={false}
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
            {locales.length > 0 && <LanguageSelector />}
            {versions && <VersionSelector />}
          </Navbar.Content>
        </Grid.Container>
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
      </Grid.Container>
    </Navbar>
  );
}
