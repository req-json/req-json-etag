import serializeRequest from '@req-json/serialize-request';

export default function (options = {}) {
  const memoryStorageCache = {};
  if (!options.storage) {
    options.storage = {
      getItem(request) {
        return Promise.resolve(memoryStorageCache[request]);
      },
      setItem(request, cached) {
        memoryStorageCache[request] = cached;
        return Promise.resolve();
      },
    };
  }
  return (ctx, next) => {
    const { storage } = options;
    const request = serializeRequest(ctx);
    return storage.getItem(request)
      .then((cached) => {
        if (cached) {
          const { header } = ctx;
          cached = JSON.parse(cached);
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
              return storage.setItem(request, JSON.stringify({
                etag,
                response: ctx.response,
              }));
            }
            return undefined;
          });
      });
  };
}
