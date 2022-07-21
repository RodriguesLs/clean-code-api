import { HttpRequest, HttpResponse } from '../protocols/http';
import { MissingParamError } from '../errors/missing-param-error';
import { badRequest } from '../helpers/http';

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields: Array<string> = ['name', 'email', 'password', 'passwordConfirmation'];

    for(const field of requiredFields) {
      if (!httpRequest.body[field])
        return badRequest(new MissingParamError(field));
    }
  }
}
