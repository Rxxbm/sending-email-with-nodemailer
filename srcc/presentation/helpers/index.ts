import { ServerErrorException } from "../exceptions/server-error-exception"

export const ok = (data?: any) => {
    return{
        body: data,
        statusCode: 200
    }
}

export const badRequest = (error: Error) => {
    return{
        body: error,
        statusCode: 400
    }
}

export const serverError = () => {
    return{
        body: new ServerErrorException(),
        statusCode: 500
    }
}