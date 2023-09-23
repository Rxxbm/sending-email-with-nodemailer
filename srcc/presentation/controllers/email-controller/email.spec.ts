import { EmailController } from './email';


const makeSUT = () => {
    const sut = new EmailController();
    return {
        sut
    };
}

describe('Email Controller', () => {
    test('Should return 400 if no email is provider', async () => {
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
});