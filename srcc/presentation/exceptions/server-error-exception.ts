export class ServerErrorException extends Error {
    constructor(){
        super(`server error`);
    }
}