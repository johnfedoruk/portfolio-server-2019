import * as NpmApi from 'npm-api';

export class NpmService {
    private npm = new NpmApi();
    public async listPackages(username: string): Promise<any> {
        const maintainer = await this.npm.maintainer(username);
        const repos = await maintainer.repos();
        const pkgs = [];
        for (let repo of repos) {
            const pkg = await this.npm.repo(repo);
            pkgs.push(await pkg.package());
        }
        return pkgs;
    }
}
