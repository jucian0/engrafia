import { Navbar, Button, Text, Grid } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { getThemeConfig } from '../../get-theme-config';
import { useSiteConfig } from '../../Provider';
import { useTranslation } from '../../useTranslation';

import { LanguageSelector } from '../LanguageSelector/Selector';
import { NavigationMenuDemo } from '../Search/Search';
import { Sidebar } from '../Sidebar/Sidebar';
import { VersionSelector } from '../VersionSelector/Selector';

const { default: themeConfig } = getThemeConfig();

export default function MenuNav() {
  const { theme, setTheme } = useTheme();
  const { versions } = useSiteConfig();
  const t = useTranslation();
  const router = useRouter();

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
            <a style={{ display: 'flex', alignItems: 'center' }}>
              {themeConfig.nav?.logo}
            </a>
          </Link>
          <Link href="/">
            <a>
              <Text b color="inherit" hideIn="xs">
                {themeConfig.nav?.textLogo}
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
                  <Link
                    key={link.url}
                    href={link.url.concat(`.${router.locale}`)}
                  >
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
            {router.locale && <LanguageSelector />}
            {versions && <VersionSelector />}
          </Navbar.Content>
        </Grid.Container>
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
      </Grid.Container>
    </Navbar>
  );
}
