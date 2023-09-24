export class MissingParamException extends Error {
    constructor(element: string){
        super(`missing param: ${element}`);
    }
}