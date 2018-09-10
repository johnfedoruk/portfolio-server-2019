import Axios, { AxiosResponse, AxiosStatic } from "axios";
import * as cheerio from "cheerio";
import * as LRU from "lru-cache";
import { config } from "../config";
import { Log } from "../decorators/log";

export class GithubService {
    private contributions: LRU.Cache<string, number> = new LRU(config.github.lru);
    private graphs: LRU.Cache<string, string> = new LRU(config.github.lru);
    private repositories: LRU.Cache<string, any[]> = new LRU(config.github.lru);
    private readmes: LRU.Cache<string, string> = new LRU(config.github.lru);
    private axios: AxiosStatic = Axios;
    @Log()
    public async getContributions(username: string): Promise<number> {
        let contributions: number | undefined = this.contributions.get(username);
        if (contributions !== undefined) {
            return contributions;
        } else {
            const url: string = `https://github.com/users/${username}/contributions`;
            const res: AxiosResponse<string> = await this.axios.get(url);
            const body: string = res.data as string;
            const regex = /mb-2\">([\s\S]*?)contributions/im;
            contributions = +((body as any).match(regex)[1].replace(/[^0-9]/g, "") as string);
            this.contributions.set(username, contributions);
            return contributions;
        }
    }
    @Log()
    public async getGraph(username: string): Promise<string> {
        let graph: string | undefined = this.graphs.get(username);
        if (graph !== undefined) {
            return graph;
        } else {
            const url: string = `https://github.com/users/${username}/contributions`;
            const res: AxiosResponse<string> = await this.axios.get(url);
            const body: string = res.data as string;
            const $ = cheerio.load(body);
            graph = $(".js-calendar-graph-svg").parent().html() as string;
            this.graphs.set(username, graph);
            return graph;
        }
    }
    @Log()
    public async getRepositories(username: string): Promise<any[]> {
        let repositories: any[] | undefined = this.repositories.get(username);
        if (repositories !== undefined) {
            return repositories;
        } else {
            const url: string = `https://api.github.com/users/${username}/repos`;
            const res: AxiosResponse<any[]> = await this.axios.get(url);
            const body: any[] = res.data;
            repositories = body.map(
                (repo: any) => {
                    return {
                        archived: repo.archived,
                        created_at: repo.created_at,
                        description: repo.description,
                        forks: repo.forks,
                        forks_count: repo.forks_count,
                        full_name: repo.full_name,
                        homepage: repo.homepage,
                        html_url: repo.html_url,
                        language: repo.language,
                        license: repo.license,
                        name: repo.name,
                        open_issues: repo.open_issues,
                        open_issues_count: repo.open_issues_count,
                        pushed_at: repo.pushed_at,
                        stargazers_count: repo.stargazers_count,
                        updated_at: repo.updated_at,
                        watchers: repo.watchers,
                        watchers_count: repo.watchers_count,
                    };
                },
            ).sort(
                (a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
            );
            this.repositories.set(username, repositories);
            return repositories;
        }
    }
    @Log()
    public async getReadme(username: string, repository: string): Promise<string> {
        const key: string = `${username}/${repository}`;
        let readme: string | undefined = this.readmes.get(key);
        if (readme !== undefined) {
            return readme;
        } else {
            const url: string = `https://raw.githubusercontent.com/${username}/${repository}/master/README.md`;
            const res: AxiosResponse<string> = await this.axios.get(url);
            readme = res.data as string;
            this.readmes.set(key, readme);
            return readme;
        }
    }
}
