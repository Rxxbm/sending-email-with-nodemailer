import { EmailDataRepository } from "../../data/protocols/email-data-repository";
import { EmailDataModel } from "../../domain/usecases/add-email-data";

export class DataEmailRepository implements EmailDataRepository{
    async addEmail(datas: EmailDataModel): Promise<EmailDataModel> {
        const {name, company_name, email, message, telephone} = datas;
        return {
            name, company_name, email, message, telephone
        };
    }
}