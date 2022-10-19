require('fix-esm').register();
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { engrafia } = require('../dist/packages/engrafia-plugin/src');
const compose = require('compose-function');
const withImages = require('next-images');

const composed = compose(engrafia, withNx, withImages);

module.exports = composed({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
