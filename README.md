# @req-json/etag

[![Greenkeeper badge](https://badges.greenkeeper.io/req-json/req-json-etag.svg)](https://greenkeeper.io/)

[![npm][badge-version]][npm]
[![bundle size][badge-size]][bundlephobia]
[![npm downloads][badge-downloads]][npm]
[![license][badge-license]][license]


[![github][badge-issues]][github]
[![travis][badge-build]][travis]
[![coverage][badge-coverage]][coveralls]

ETag middleware for [req-json][req-json].

## Installation

### NPM

```
npm install @req-json/etag --save
```

```js
import ReqJSON from 'req-json';
import reqJSONETag from '@req-json/etag';

const reqJSON = new ReqJSON();
reqJSON.use(reqJSONETag());
```

### Browser

Direct `<script>` include `window.reqJSONETag`

```html
<script src="https://cdn.jsdelivr.net/npm/@req-json/etag@1"></script>
```

## Options

```js
reqJSON.use(reqJSONETag({
  storage: {
    async getItem(id) {
      // ...
    },
    async setItem(id, content) {
      // ...
    }
  }
}));
```

[req-json]: https://github.com/Cweili/req-json

[badge-version]: https://img.shields.io/npm/v/@req-json%2Fetag.svg
[badge-downloads]: https://img.shields.io/npm/dt/@req-json%2Fetag.svg
[npm]: https://www.npmjs.com/package/@req-json/etag

[badge-size]: https://img.shields.io/bundlephobia/minzip/@req-json%2Fetag.svg
[bundlephobia]: https://bundlephobia.com/result?p=@req-json%2Fetag

[badge-license]: https://img.shields.io/npm/l/@req-json%2Fetag.svg
[license]: https://github.com/req-json/req-json-etag/blob/master/LICENSE

[badge-issues]: https://img.shields.io/github/issues/req-json/req-json-etag.svg
[github]: https://github.com/req-json/req-json-etag

[badge-build]: https://travis-ci.org/req-json/req-json-etag.svg?branch=master
[travis]: https://travis-ci.org/req-json/req-json-etag

[badge-coverage]: https://coveralls.io/repos/github/req-json/req-json-etag/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/req-json/req-json-etag?branch=master
