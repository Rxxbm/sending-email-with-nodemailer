import { Express, Router } from 'express';
import { readdirSync } from "fs";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger';

export const setupRoutes = (app: Express): void => {
    const router = Router();
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api-docs-json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    app.use('/api', router);
    readdirSync(`${__dirname}/../routes`).map(async fileName => {
        (await import(`../routes/${fileName}`)).default(router);
    });
}