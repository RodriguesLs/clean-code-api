import { HttpRequest, HttpResponse } from '../protocols/http';
import { MissingParamError } from '../errors/missing-param-error';
export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    let body;

    if (!httpRequest.body.name) body = new MissingParamError('name');
    if (!httpRequest.body.email) body = new MissingParamError('email');

    return { statusCode: 400, body };
  }
}
