export type EmailDataModel = {
    name: string;
    company_name: string;
    telephone: string;
    email: string;
    message: string;
};

export interface AddEmail {
    add(data: EmailDataModel): Promise<EmailDataModel>;
}