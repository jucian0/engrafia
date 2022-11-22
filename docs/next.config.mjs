import { engrafia } from 'engrafia/src/plugin/engrafia-plugin.js';

import compose from 'compose-function';
import withImages from 'next-images';

const composed = compose(engrafia, withImages);

export default composed({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
});
