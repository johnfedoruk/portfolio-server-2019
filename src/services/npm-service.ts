import * as NpmApi from 'npm-api';
import * as LRU from 'lru-cache';
import { config } from '../config';
import { Log } from '../decorators/log';

export class NpmService {
    private packages: LRU.Cache<string, any[]> = new LRU(config.npm.lru);
    private npm = new NpmApi();
    @Log()
    public async listPackages(username: string): Promise<any> {
        let pkgs: any[] | undefined = this.packages.get(username);
        if ( pkgs !== undefined ) {
            return pkgs;
        } else {
            pkgs = [];
            const maintainer = await this.npm.maintainer(username);
            const repos = await maintainer.repos();
            for (let repo of repos) {
                const pkg = await this.npm.repo(repo);
                pkgs.push(await pkg.package());
            }
            return pkgs;
        }
    }
}
