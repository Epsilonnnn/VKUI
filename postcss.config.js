const path = require('path');
const cssCustomProperties = require('postcss-custom-properties');
const scopeRoot = require('./tasks/postcss-scope-root.js');
const cssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const selectorPrefixer = require('postcss-prefixer');
const csso = require('postcss-csso');
const { defaultSchemeId } = require('./package.json');

let plugins = [
  cssImport(),
  cssCustomProperties({ preserve: true }),
  // postcss-custom-properties only works with :root
  scopeRoot({
    customPropRoot: '.vkui__root, .vkui__portal-root',
    except: path.resolve(`./src/styles/${defaultSchemeId}.css`)
  }),
  autoprefixer(),
  selectorPrefixer({
    prefix: 'vkui',
    ignore: [/^\.vkui/, '#mount']
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(csso({ restructure: false }));
}

module.exports = { plugins };
