import Axios, { AxiosStatic, AxiosResponse } from 'axios';
import { config } from '../config';
import * as LRU from 'lru-cache';
import * as cheerio from 'cheerio';
import { Log } from '../decorators/log';

export class GithubService {
    private contributions: LRU.Cache<string, number> = new LRU(config.github.lru);
    private graphs: LRU.Cache<string, string> = new LRU(config.github.lru);
    private readmes: LRU.Cache<[string, string], string> = new LRU(config.github.lru);
    private axios: AxiosStatic = Axios;
    @Log()
    public async getContributions(username: string): Promise<number> {
        let contributions: number | undefined = this.contributions.get(username);
        if (contributions !== undefined) {
            return contributions;
        } else {
            const url: string = `https://github.com/users/${username}/contributions`;
            const res: AxiosResponse<string> = await this.axios.get(url);
            const body: string = <string>res.data;
            const regex = /mb-2\">([\s\S]*?)contributions/im;
            contributions = +(<string>(<any>body).match(regex)[1].replace(/[^0-9]/g, ''));
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
            const body: string = <string>res.data;
            const $ = cheerio.load(body);
            graph = <string>$('.js-calendar-graph-svg').parent().html();
            this.graphs.set(username, graph);
            return graph;
        }
    }
    @Log()
    public async getReadme(username: string, repository: string): Promise<string> {
        // const key: string = `${username}/${repository}`;
        let readme: string | undefined = this.readmes.get([username, repository]);
        if (readme !== undefined) {
            console.log('found');
            return readme;
        } else {
            const url: string = `https://raw.githubusercontent.com/${username}/${repository}/master/README.md`;
            const res: AxiosResponse<string> = await this.axios.get(url);
            const readme: string = <string>res.data;
            console.log('saving');
            this.readmes.set([username, repository], readme);
            return readme;
        }
    }
}