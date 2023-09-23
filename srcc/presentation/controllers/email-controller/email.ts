import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class EmailController implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse>{
        try{
            const requireFields = ['email', 'telephone', 'name', 'company_name', 'message'];
            for (const field of requireFields) {
                if (!httpRequest.body[field]) {
                    return {
                        body: new Error(`missing params: ${field}`),
                        statusCode: 400
                    };
                }
            }
            return {
                body: httpRequest.body,
                statusCode: 200
            };
        }catch{
            return {
                statusCode: 500
            }
        };
     }
}
