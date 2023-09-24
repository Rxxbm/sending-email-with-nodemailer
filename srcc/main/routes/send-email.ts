import { Router } from 'express';
import { adaptRoute } from '../../main/adapters/express-router';
import { makeEmailController } from '../../main/factories/email-controller';


export default (router: Router): void => {
    router.post('/email', adaptRoute(makeEmailController()));
}