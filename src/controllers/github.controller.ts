import { HttpController } from '@yellow-snow/http/lib';
import { Resolve } from 'tsnode-di/lib';
import { GithubService } from '../services/github-service';

export class GithubController extends HttpController {
    @Resolve(GithubService)
    private github!: GithubService;
    public async getContributions(): Promise<void> {
        try {
            const username: string = this.req.params.username;
            const contributions: number = await this.github.getContributions(username);
            this.res.send(`${contributions}`);
        } catch (e) {
            console.error(e);
            this.res.sendStatus(500);
        } 
    }
}
