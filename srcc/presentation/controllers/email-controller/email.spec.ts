import { AddEmail, EmailDataModel } from '../../../domain/usecases/add-email-data';
import { MissingParamException } from '../../exceptions/missing-param-exception';
import { EmailController } from './email';


class AddEmailStub implements AddEmail {
    async add(data: EmailDataModel): Promise<EmailDataModel> {
        return {
            name: 'any_name',
            company_name: 'any_company',
            telephone: 'any_telephone',
            email: 'any_email',
            message: 'any_message'
        };
    }
}

const makeSUT = () => {
    const addEmailStub = new AddEmailStub();
    const sut = new EmailController(addEmailStub);
    return {
        sut,
        addEmailStub
    };
}

describe('Email Controller', () => {
    test('Should return 400 if no email is provided', async () => {
        const { sut } = makeSUT();
        const httpRequest = {
            body: {
                name: 'any_name',
                company_name: 'any_company',
                telephone: 'any_telephone',
                message: 'any_message'
            }
        };
        const httpResponse = await sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new MissingParamException('email'));
    });
    test('Should return 400 if no name is provided', async () => {
        const { sut } = makeSUT();
        const httpRequest = {
            body: {
                email: 'any_email',
                company_name: 'any_company',
                telephone: 'any_telephone',
                message: 'any_message'
            }
        };
        const httpResponse = await sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new MissingParamException('name'));
    });
    test('Should return 400 if no telephone is provided', async () => {
        const { sut } = makeSUT();
        const httpRequest = {
            body: {
                name: 'any_name',
                company_name: 'any_company',
                email: 'any_email',
                message: 'any_message'
            }
        };
        const httpResponse = await sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new MissingParamException('telephone'));
    });
    test('Should return 400 if no company_name is provided', async () => {
        const { sut } = makeSUT();
        const httpRequest = {
            body: {
                name: 'any_name',
                email: 'any_email',
                telephone: 'any_telephone',
                message: 'any_message'
            }
        };
        const httpResponse = await sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new MissingParamException('company_name'));
    });
    test('Should return 400 if no message is provider', async () => {
        const { sut } = makeSUT();
        const httpRequest = {
            body: {
                name: 'any_name',
                company_name: 'any_company',
                telephone: 'any_telephone',
                email: 'any_email'
            }
        };
        const httpResponse = await sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new MissingParamException('message'));
    });
    test('Should call add email with correct values', async () => {
        const { sut, addEmailStub } = makeSUT();
        const addSpy = jest.spyOn(addEmailStub, 'add');
        const httpRequest = {
            body: {
                name: 'any_name',
                company_name: 'any_company',
                telephone: 'any_telephone',
                email: 'any_email',
                message: 'any_message'
            }
        };
        await sut.handle(httpRequest);
        expect(addSpy).toHaveBeenCalledWith({
            name: 'any_name',
            company_name: 'any_company',
            telephone: 'any_telephone',
            email: 'any_email',
            message: 'any_message'
        });
    });
});