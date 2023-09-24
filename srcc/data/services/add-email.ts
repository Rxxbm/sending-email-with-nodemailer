import { AddEmail, EmailDataModel } from "../../domain/usecases/add-email-data";
import { EmailDataRepository } from "../protocols/email-data-repository";

export class AddEmailService implements AddEmail{
    constructor(private readonly emailDataRepository: EmailDataRepository){}
    async add(emailData: EmailDataModel): Promise<EmailDataModel> {
        const data = await this.emailDataRepository.addEmail(emailData);
        return data;
    }
}