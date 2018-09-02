import { HttpController } from '@yellow-snow/http/lib';
import { Resolve } from 'tsnode-di/lib';
import { GithubService } from '../services/github-service';
import { AccessLog } from '../decorators/access-log';
import { Log } from '../decorators/log';

export class GithubController extends HttpController {
    @Resolve(GithubService)
    private github!: GithubService;
    @AccessLog()
    @Log("info")
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
    @AccessLog()
    @Log("info")
    public async getGraph(): Promise<void> {
        try {
            const username: string = this.req.params.username;
            const graph: string = await this.github.getGraph(username);
            this.res.send(graph);
        } catch (e) {
            console.error(e);
            this.res.sendStatus(500);
        } 
    }
}
