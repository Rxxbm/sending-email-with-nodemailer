import { Response, Request } from "express";
import { Controller } from "../../presentation/protocols/controller";

export const adaptRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpResponse = await controller.handle(req);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}