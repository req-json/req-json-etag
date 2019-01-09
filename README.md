# @req-json/etag

[![npm][npm-version]][npm]
[![npm][npm-size]][npm]
[![npm][npm-downloads]][npm]
[![npm][npm-license]][npm]


[![github][github-issues]][github]
[![travis][travis-build]][travis]
[![codecov][codecov-svg]][codecov]


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
    async setItem(id) {
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

[github]: https://github.com/Cweili/req-json
[github-issues]: https://img.shields.io/github/issues/Cweili/req-json.svg

[travis]: https://travis-ci.org/req-json/req-json-etag
[travis-build]: https://travis-ci.org/req-json/req-json-etag.svg?branch=master

[codecov]: https://codecov.io/gh/req-json/etag
[codecov-svg]: https://img.shields.io/codecov/c/github/req-json/etag.svg
