import { EmailController } from "../../presentation/controllers/email-controller/email";
import { AddEmailService } from "../../data/services/add-email";
import { DataEmailRepository } from "../../infra/repositories/data-repository-email";
import { MailNodemailerProvider } from "../../utils-adapter/nodemailer/nodemailer";
import { Controller } from "../../presentation/protocols/controller";

export const makeEmailController = ():Controller => {
    const nodemailer = new MailNodemailerProvider();
    const repo = new DataEmailRepository(nodemailer);
    const loader = new AddEmailService(repo);
    return new EmailController(loader);
}