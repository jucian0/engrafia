import { Navbar, Button, Text, Grid } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { useEngrafiaConfig } from '../../EngrafiaProvider';
import { useTranslation } from '../../useTranslation';

import { LanguageSelector } from '../LanguageSelector/Selector';
import { Search } from '../Search/Search';
import { Sidebar } from '../Sidebar/Sidebar';
import { VersionSelector } from '../VersionSelector/Selector';

export default function MenuNav() {
  const { theme, setTheme } = useTheme();
  const { versions, themeConfig } = useEngrafiaConfig();
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
            marginRight: '$20',
          }}
        >
          {themeConfig.nav?.links && (
            <Navbar.Content
              activeColor={'primary'}
              hideIn="xs"
              variant="default"
              css={{ color: '$accents8' }}
            >
              {themeConfig.nav?.links?.map((link) => {
                if (link.external) {
                  return (
                    <Navbar.Link key={link.href} href={link.href}>
                      {t(link.title)}
                    </Navbar.Link>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href.concat(`.${router.locale}`)}
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
            width: 'max-content',
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
            {themeConfig.nav?.iconsLinks?.map((link) => {
              if (link.external) {
                return (
                  <Navbar.Item>
                    <Navbar.Link key={link.href} href={link.href}>
                      {link.icon}
                    </Navbar.Link>
                  </Navbar.Item>
                );
              }
              return (
                <Navbar.Item>
                  <Link
                    key={link.href}
                    href={link.href.concat(`.${router.locale}`)}
                  >
                    <Navbar.Link>{link.icon}</Navbar.Link>
                  </Link>
                </Navbar.Item>
              );
            })}

            <Search />

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
