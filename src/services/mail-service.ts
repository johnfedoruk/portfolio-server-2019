import * as nodemailer from "nodemailer";
import { config } from "../config";
import { Log } from "../decorators/log";

export class MailService {
    private transport: nodemailer.Transporter;
    constructor() {
        this.transport = nodemailer.createTransport(
            config.smtp,
        );
    }
    @Log()
    public async sendMail(mail: nodemailer.SendMailOptions): Promise<void> {
        await this.transport.sendMail(mail);
    }
}
