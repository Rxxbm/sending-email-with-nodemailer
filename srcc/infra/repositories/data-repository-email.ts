import { EmailDataRepository } from "../../data/protocols/email-data-repository";
import { EmailDataModel } from "../../domain/usecases/add-email-data";
import { MailNodemailerProvider } from "../../utils-adapter/nodemailer/nodemailer";

export class DataEmailRepository implements EmailDataRepository{
    constructor(private readonly mailNodemailerProvider: MailNodemailerProvider) {}
    async addEmail(datas: EmailDataModel): Promise<EmailDataModel> {
        const {name, company_name, email, message, telephone, service} = datas;
        await this.mailNodemailerProvider.execute({
            body: `
            <p>Nome: ${name}<p>
            <p>Nome da Empresa: ${company_name}<p>
            <p>Email: ${email}<p>
            <p>Telefone/Celular: ${telephone}<p>
            <p>Serviço: ${service}<p>
            <hr>
            <p>Mensagem: ${message}<p>
            `,
            subject: 'Novo Formulário Submetido!'
        });
        return {
            name, company_name, email, message, telephone, service
        };
    }
}