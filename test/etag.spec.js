import mock from 'xhr-mock';
import ReqJSON from 'req-json';
import reqJSONETag from '../dist/etag.cjs';

beforeEach(() => mock.setup());

afterEach(() => mock.teardown());

it('should contains context attributes', async () => {
  const ETAG = '"a-NvrprAAqoY5Ht5DCnd6gYZpX4Rk"';
  const reqJSON = new ReqJSON();
  const resource = reqJSON.resource('/api/item/:id');
  const body = {
    name: 1,
  };
  const fn = jest.fn();

  reqJSON.use(reqJSONETag());

  mock.get('/api/item/1', (req, res) => {
    if (req.header('If-None-Match') === ETAG) {
      fn();
      return res.status(304);
    }
    return res
      .status(200)
      .headers({
        'Content-Type': 'application/json',
        ETag: ETAG,
      })
      .body(JSON.stringify(body));
  });

  expect(await resource.get({
    id: 1,
  })).toEqual(await resource.get({
    id: 1,
  }));
  expect(fn).toHaveBeenCalledTimes(1);
});
