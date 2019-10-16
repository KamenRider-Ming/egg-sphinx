# egg-sphinx
egg框架的sphinx插件

# egg-sphinx

[![NPM version][npm-image]][npm-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-sphinx.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-sphinx
[snyk-image]: https://snyk.io/test/npm/egg-sphinx/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-sphinx
[download-image]: https://img.shields.io/npm/dm/egg-sphinx.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-sphinx

<!--
Description here.
-->

## 安装

```bash
$ npm i egg-sphinx --save
```

## 开启插件

```js
// {app_root}/config/plugin.js
exports.sphinx = {
  enable: true,
  package: 'egg-sphinx',
}

[sphinx-promise](https://www.npmjs.com/package/sphinx-promise) 依赖于该库.
```
## 详细配置

```js
// {app_root}/config/config.default.js
exports.wechatAll = {
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

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 如何使用

更多信息，请参照：

[sphinx-promise] (https://github.com/IPRIT/sphinx-promise)

[sphinxapi] (https://github.com/Inist-CNRS/node-sphinxapi)

Sphinx官方API文档: (http://sphinxsearch.com/docs/current.html#api-reference)

## 代码示例

```js
const sphinx = app.sphinx.get('sphinxTest')
const result = await sphinx.query('hello world', {
    matchMode: sphinx.SPH_MATCH_EXTENDED2
})
```

## 提问交流

请到 [这里](https://github.com/KamenRider-Ming/egg-sphinx/issues) 交流。

## License

[MIT](LICENSE)
