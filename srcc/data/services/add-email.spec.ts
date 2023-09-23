import { EmailDataModel } from "../../domain/usecases/add-email-data";
import { EmailDataRepository } from "../protocols/email-data-repository";
import { AddEmailService } from "./add-email";

class EmailDataRepositoryStub implements EmailDataRepository {
    async addEmail(data: EmailDataModel): Promise<EmailDataModel> {
        return {
            name: 'any_name',
            company_name: 'any_company',
            telephone: 'any_telephone',
            email: 'any_email',
            message: 'any_message'
        };
    }
}

describe('Email Service', () => {
    test('Should call emailDataRepository with correct values', async () => {
        const emailDataRepository = new EmailDataRepositoryStub();
        const sut = new AddEmailService(emailDataRepository);
        const addSpy = jest.spyOn(emailDataRepository, 'addEmail');
        const httpRequest = {
            body: {
                name: 'any_name',
                company_name: 'any_company',
                telephone: 'any_telephone',
                email: 'any_email',
                message: 'any_message'
            }
        };
        await sut.add(httpRequest.body);
        expect(addSpy).toHaveBeenCalledWith({
            name: 'any_name',
            company_name: 'any_company',
            telephone: 'any_telephone',
            email: 'any_email',
            message: 'any_message'
        });
    });
});