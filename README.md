# egg-sphinx
Sphinx plugin for egg

# egg-sphinx

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-sphinx.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-sphinx
[download-image]: https://img.shields.io/npm/dm/egg-sphinx.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-sphinx

<!--
Description here.
-->

## Install

```bash
$ npm i egg-sphinx --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.sphinx = {
  enable: true,
  package: 'egg-sphinx',
}

[sphinx-promise](https://www.npmjs.com/package/sphinx-promise) is required.
```
## Configuration

```js
// {app_root}/config/config.default.js
exports.sphinx = {
  clients: {
    sphinx1: {
      host: 'localhost',
      port: 9312
    },
    sphinx2: {
      host: 'localhost',
      port: 9312
    }
  }
}
```

see [config/config.default.js](config/config.default.js) for more details.

## How

For more details, please refer to the following links.

[sphinx-promise] (https://github.com/IPRIT/sphinx-promise)

[sphinxapi] (https://github.com/Inist-CNRS/node-sphinxapi)

From the Sphinx official documentation : http://sphinxsearch.com/docs/current.html#api-reference

## Example

```js
const sphinx = app.sphinx.get('sphinxTest')
const result = await sphinx.query('hello world', {
    matchMode: sphinx.SPH_MATCH_EXTENDED2
})
```

## Questions & Suggestions

Please open an issue [here](https://github.com/KamenRider-Ming/egg-sphinx/issues).

## License

[MIT](LICENSE)
