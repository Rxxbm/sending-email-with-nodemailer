import { EmailController } from './email';


const makeSUT = () => {
    const sut = new EmailController();
    return {
        sut
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
        expect(httpResponse.body).toEqual(new Error('missing params: email'));
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
        expect(httpResponse.body).toEqual(new Error('missing params: name'));
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
        expect(httpResponse.body).toEqual(new Error('missing params: telephone'));
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
        expect(httpResponse.body).toEqual(new Error('missing params: company_name'));
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
        expect(httpResponse.body).toEqual(new Error('missing params: message'));
    });
});