import { RiGithubFill } from 'react-icons/ri';
import logo from '/public/imgs/logo-2.svg';

export default {
  title: 'Engrafia',
  description: 'Easily, and delightful documentation website generator!',
  rootDocs: 'docs',
  repository: {
    url: 'http://github.com/jucian0/engrafia',
    branch: 'main',
    author: 'Jucian0',
  },
  loadSidebarIcons: true,
  nav: {
    logo,
    links: [
      {
        title: 'link.docs',
        href: '/docs/0.1.0/introduction/quick-start',
      },
    ],
    search_bar: 'search.placeholder',
    iconsLinks: [
      {
        icon: <RiGithubFill fill="var(--nextui-colors-accents6)" size={20} />,
        href: 'https://github.com/jucian0/engrafia',
        external: true,
      },
    ],
  },
  footer: {
    text: (
      <>
        Engrafia 2022 Developed by:{' '}
        <a href={'https://github.com/Jucian0'}> Juciano</a>
      </>
    ),
    textLogo: '',
    logo,
  },
  sidebar: {
    order: ['introduction', 'features', 'customization'],
  },
};
