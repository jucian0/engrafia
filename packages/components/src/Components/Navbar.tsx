import { Navbar, Button, Link, Text, Input } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSearchFill, RiSunFill } from 'react-icons/ri';

import { AcmeLogo } from './DefaultLogo';

export default function MenuNav() {
  const { theme, setTheme } = useTheme();

  const collapseItems = [
    'Features',
    'Customers',
    'Pricing',
    'Company',
    'Legal',
    'Team',
    'Help & Feedback',
    'Login',
    'Sign Up',
  ];

  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <AcmeLogo />
        <Text b color="inherit" hideIn="xs">
          ACME
        </Text>
      </Navbar.Brand>
      <Navbar.Content activeColor={'primary'} hideIn="xs" variant="default">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
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
            contentLeftStyling={false}
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
            placeholder="Search..."
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
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
    </Navbar>
  );
}
