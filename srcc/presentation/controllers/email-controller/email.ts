import { AddEmail } from "../../../domain/usecases/add-email-data";
import { MissingParamException } from "../../exceptions/missing-param-exception";
import { badRequest, ok, serverError } from "../../helpers";
import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class EmailController implements Controller {
    constructor(private readonly addEmail: AddEmail) {}
    async handle(httpRequest: HttpRequest): Promise<HttpResponse>{
        try{
            const requireFields = ['email', 'telephone', 'name', 'company_name', 'message'];
            for (const field of requireFields) {
                if (!httpRequest.body[field]) {
                    return badRequest(new MissingParamException(field));
                }
            }
            const emailData = await this.addEmail.add(httpRequest.body);
            return ok(emailData);
        }catch{
            return serverError();
        };
     }
}
