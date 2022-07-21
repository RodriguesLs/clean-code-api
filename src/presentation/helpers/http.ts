import { HttpResponse } from '../protocols/http';

export const badRequest = (err) => ({
  statusCode: 400,
  body: err
});
