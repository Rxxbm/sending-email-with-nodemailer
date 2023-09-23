import { MailNodemailerProvider } from './nodemailer';

describe('MailNodemailerProvider', () => {
  test('Should call MailNodeMailerProvider with correct values', async () => {
    const sendMailMock = jest.fn();

    const transporterMock = {
      sendMail: sendMailMock
    };

    jest.spyOn(require('nodemailer'), 'createTransport').mockReturnValue(transporterMock as any);

    const mailProvider = new MailNodemailerProvider();

    const message = {
      subject: 'any_subject',
      body: 'any_body',
    };

    await mailProvider.execute(message);
    
    expect(sendMailMock).toHaveBeenCalledWith({
      to: {
        name: process.env.NAME || '',
        address: process.env.EMAIL || ''
      },
      from: {
        name: process.env.NAME_AUTH || '',
        address: process.env.EMAIL_AUTH || ''
      },
      subject: 'any_subject',
      html: 'any_body'
    });
  });
});
