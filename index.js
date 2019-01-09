import serializeRequest from '@req-json/serialize-request';

const memoryStorageCache = {};
const memoryStorage = {
  getItem(request) {
    return Promise.resolve(memoryStorageCache[request]);
  },
  setItem(request, cached) {
    memoryStorageCache[request] = cached;
    return Promise.resolve();
  },
};
export default function (options = {}) {
  if (!options.storage) {
    options.storage = memoryStorage;
  }
  return function (ctx, next) {
    const { storage } = options;
    const request = serializeRequest(ctx);
    return storage.getItem(request)
      .then((cached) => {
        if (cached) {
          const header = ctx.header || ctx.headers || {};
          header['If-None-Match'] = cached.etag;
          ctx.header = ctx.headers = header;
        }
        return next()
          .then(() => {
            if (cached && ctx.status === 304) {
              ctx.response = cached.response;
            }
            const { etag } = ctx.header;
            if (etag) {
              return storage.setItem(request, {
                etag,
                response: ctx.response,
              });
            }
            return undefined;
          });
      });
  };
}
