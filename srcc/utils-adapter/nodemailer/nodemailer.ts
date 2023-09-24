import Mail from "nodemailer/lib/mailer";
import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import { IMessage, SendEmail } from "../../domain/usecases/send-email";

dotenv.config();

export class MailNodemailerProvider implements SendEmail{
    private readonly transporter: Mail;
    
    constructor(){
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_AUTH || '',
                pass: process.env.PASS_AUTH 
            }
        });
    }

    async execute(message: IMessage): Promise<void> {
        this.transporter.sendMail({
            to: {
                name: process.env.NAME || '',
                address: process.env.EMAIL || '' 
            },
            from: {
                name: process.env.NAME_AUTH || '',
                address: process.env.EMAIL_AUTH || ''
            },
            subject: message.subject,
            html: message.body
        })
    }
}