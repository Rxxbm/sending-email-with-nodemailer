import { MissingParamException } from "../../exceptions/missing-param-exception";
import { ServerErrorException } from "../../exceptions/server-error-exception";
import { badRequest, serverError } from "../../helpers";
import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class EmailController implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse>{
        try{
            const requireFields = ['email', 'telephone', 'name', 'company_name', 'message'];
            for (const field of requireFields) {
                if (!httpRequest.body[field]) {
                    return badRequest(new MissingParamException(field));
                }
            }
            return {
                body: httpRequest.body,
                statusCode: 200
            };
        }catch{
            return serverError();
        };
     }
}
