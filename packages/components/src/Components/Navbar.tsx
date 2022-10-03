import { Navbar, Button, Text, Input, Grid } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { RiMoonFill, RiSearchFill, RiSunFill } from 'react-icons/ri';
import { useSiteConfig } from '../Provider';
import { useTranslate } from '../useTranslation';

import { AcmeLogo } from './DefaultLogo';
import { Sidebar } from './Sidebar/Sidebar';

export default function MenuNav() {
  const { theme, setTheme } = useTheme();
  const { config, sidebar } = useSiteConfig();
  const t = useTranslate();

  return (
    <Navbar variant="sticky" isBordered={theme === 'dark'} maxWidth="fluid">
      <Grid.Container
        wrap="nowrap"
        id="juciano"
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '87.5rem',
          margin: 'auto',
        }}
      >
        <Navbar.Brand>
          {config.nav?.logo ? (
            <img alt="web_site_lgo" src={config.nav.logo} />
          ) : (
            <AcmeLogo />
          )}

          <Text b color="inherit" hideIn="xs">
            <Link href="/">{config.title}</Link>
          </Text>
        </Navbar.Brand>
        {config.nav?.links && (
          <Navbar.Content activeColor={'primary'} hideIn="xs" variant="default">
            {config.nav?.links.map((link) => (
              <Navbar.Link href={link.url}>{t(link.title)}</Navbar.Link>
            ))}
          </Navbar.Content>
        )}
        <Navbar.Content
          css={{
            '@xsMax': {
              w: '100%',
              jc: 'space-between',
            },
          }}
        >
          <Navbar.Item
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
                <RiSearchFill fill="var(--nextui-colors-accents6)" size={16} />
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
              placeholder={t(config.nav?.search_bar ?? 'Search')}
            />
          </Navbar.Item>

          <Navbar.Item>
            <Button
              icon={
                theme === 'dark' ? (
                  <RiSunFill fill="var(--nextui-colors-accents6)" size={16} />
                ) : (
                  <RiMoonFill fill="var(--nextui-colors-accents6)" size={16} />
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
          {/**
           * destructure sidebar in favor to have a generic component to ue in different parts
           */}
          <Sidebar />
        </Navbar.Collapse>
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
      </Grid.Container>
    </Navbar>
  );
}
