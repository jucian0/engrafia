require('fix-esm').register();
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { engrafia } = require('../dist/packages/engrafia');
const compose = require('compose-function');

const composed = compose(engrafia, withNx);

module.exports = composed({
  nx: {
    svgr: false,
  },
});
