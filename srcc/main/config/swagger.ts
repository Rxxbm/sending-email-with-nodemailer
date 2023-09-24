import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Sending Email With Nodemailer',
      version: '1.0.0',
      description: 'Documentation',
    },
  },
  apis: ['./srcc/main/routes/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
