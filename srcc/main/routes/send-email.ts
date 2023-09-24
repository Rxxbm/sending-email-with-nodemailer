/**
 * @swagger
 * /api/email:
 *   post:
 *     summary: Send an email
 *     description: Sends an e-mail message to the address specified in the ".env" file.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               company_name:
 *                 type: string
 *               telephone:
 *                 type: string
 *               email:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Data from the email sent.
 *       400:
 *         description: error message.
 */
import { Router } from 'express';
import { adaptRoute } from '../../main/adapters/express-router';
import { makeEmailController } from '../../main/factories/email-controller';


export default (router: Router): void => {
    router.post('/email', adaptRoute(makeEmailController()));
}