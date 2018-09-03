import { HttpController } from '@yellow-snow/http';
import { Resolve } from 'tsnode-di';
import { MailService } from '../services/mail-service';
import { ProfileDataSource } from '../models/data-sources/profile-data-source';
import { Contact } from '../models/profile/contact';
import { AccessLog } from '../decorators/access-log';
import { Log } from '../decorators/log';
import { MemoryProfileService } from '../services/memory-profile-service';

export class MailController extends HttpController {
    @Resolve(MemoryProfileService)
    private profile_service!: ProfileDataSource;
    @Resolve(MailService)
    private mail_service!: MailService;
    @AccessLog()
    @Log("info")
    public async sendContactMail(): Promise<void> {
        try {
            const id: number = +this.req.params.id;
            const contact: Contact = await this.profile_service.getContact(id);
            if (contact === undefined) {
                throw new Error(`Could not find user with id ${id}`);
            }
            const to: string = contact.emails ? contact.emails[0] : (() => {
                throw new Error(`No emails registered for user ${id}`)
            })();
            const from: string = this.req.body.from;
            const subject: string = this.req.body.subject;
            const html: string = this.req.body.body;
            const mail = {
                to,
                from,
                subject,
                html,
            };
            await this.mail_service.sendMail(mail);
            this.res.sendStatus(200);
        } catch (e) {
            console.error(e);
            this.res.sendStatus(500);
        }
    };
}
