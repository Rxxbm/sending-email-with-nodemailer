import { AddEmail, EmailDataModel } from "../../domain/usecases/add-email-data";
import { EmailDataRepository } from "../protocols/email-data-repository";

export class AddEmailService implements AddEmail{
    constructor(private readonly emailDataRepository: EmailDataRepository){}
    async add(data: EmailDataModel): Promise<EmailDataModel> {
        const datas = await this.emailDataRepository.addEmail(data);
        return datas;
    }
}