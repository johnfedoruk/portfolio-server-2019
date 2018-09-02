import { Resolve } from 'tsnode-di';
import { HttpController } from '@yellow-snow/http';
import { NpmService } from '../services/npm-service';

export class NpmController extends HttpController {
    @Resolve(NpmService)
    private npm_service!: NpmService;
    public async listPackages(): Promise<void> {
        try {
            const username: string = this.req.params.username;
            const packages: any[] = await this.npm_service.listPackages(username);
            this.res.send(packages);
        } catch (e) {
            console.error(e);
            this.res.sendStatus(500);
        }
    }
}
