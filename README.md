# @req-json/etag

[![npm][npm-version]][npm]
[![npm][npm-size]][npm]
[![npm][npm-downloads]][npm]
[![npm][npm-license]][npm]


[![github][github-issues]][github]
[![travis][travis-build]][travis]
[![coverage][coveralls-svg]][coveralls-svg]

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

Direct `<script>` include

```html
<script src="https://cdn.jsdelivr.net/npm/@req-json/etag"></script>
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

[npm]: https://www.npmjs.com/package/@req-json/etag
[npm-version]: https://img.shields.io/npm/v/@req-json%2Fetag.svg
[npm-size]: https://img.shields.io/bundlephobia/minzip/@req-json%2Fetag.svg
[npm-downloads]: https://img.shields.io/npm/dt/@req-json%2Fetag.svg
[npm-license]: https://img.shields.io/npm/l/@req-json%2Fetag.svg

[github]: https://github.com/req-json/req-json-etag
[github-issues]: https://img.shields.io/github/issues/req-json/req-json-etag.svg

[travis]: https://travis-ci.org/req-json/req-json-etag
[travis-build]: https://travis-ci.org/req-json/req-json-etag.svg?branch=master

[coveralls]: https://coveralls.io/github/req-json/req-json-etag?branch=master
[coveralls-svg]: https://coveralls.io/repos/github/req-json/req-json-etag/badge.svg?branch=master
