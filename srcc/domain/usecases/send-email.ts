export interface SendEmail {
    execute (message: IMessage): Promise<void>;
}
export type IMessage = {
    subject: string;
    body: string;
}