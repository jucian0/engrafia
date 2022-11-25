import { engrafia } from '../dist/packages/engrafia/src/plugin/engrafia-plugin.js';
import withImages from 'next-images';
import compose from 'compose-function';

const composed = compose(engrafia, withImages);

export default composed({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  siteUrl: process.env.SITE_URL || 'https://engrafia.vercel.app',
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
});
