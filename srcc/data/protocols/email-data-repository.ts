import { AddEmailModel, EmailModel } from '../models/email-data';

export interface EmailDataRepository {
    addEmail(data: AddEmailModel): Promise<EmailModel>;
}