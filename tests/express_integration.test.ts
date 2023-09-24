import request from 'supertest';
import app from '../srcc/main/config/app';

describe('Express', () => {
  test('Should send email on success', async () => {
    const response = await request(app)
      .post('/api/email')
      .send({
       email: "any_email",
       company_name: "any_company_name",
       telephone: "any_number",
       name: "any_name",
       message: "any_message"
      });

    expect(response.statusCode).toBe(200);
  });
});