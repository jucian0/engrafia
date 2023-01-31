import { Navbar, Button, Text, Grid } from '@nextui-org/react';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { useEngrafiaConfig } from '../../EngrafiaProvider';
import { useTranslation } from '../../useTranslation';
import { LanguageSelector } from '../LanguageSelector/Selector';
import { Link } from '../Link';
import { Search } from '../Search/Search';
import { Sidebar } from '../Sidebar/Sidebar';
import { VersionSelector } from '../VersionSelector/Selector';

export default function NavBar() {
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
        <Navbar.Brand css={{ marginInlineStart: '.8rem', minWidth: 85 }}>
          <Link href="/">
            <Image src={themeConfig.nav?.logo} alt="" width={200} height={60} />{' '}
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
                  <Link key={link.href} href={link.href}>
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
                  <Navbar.Item key={link.href}>
                    <Navbar.Link key={link.href} href={link.href}>
                      {link.icon}
                    </Navbar.Link>
                  </Navbar.Item>
                );
              }
              return (
                <Navbar.Item key={link.href}>
                  <Link key={link.href} href={link.href}>
                    <Navbar.Link>{link.icon}</Navbar.Link>
                  </Link>
                </Navbar.Item>
              );
            })}

            <Search />

            <Navbar.Item>
              <Button
                name="theme-switch"
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
            {versions && versions?.length > 0 && <VersionSelector />}
          </Navbar.Content>
        </Grid.Container>
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
      </Grid.Container>
    </Navbar>
  );
}
