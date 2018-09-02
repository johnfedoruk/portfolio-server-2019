import Axios, { AxiosStatic, AxiosResponse } from 'axios';
import { config } from '../config';
import * as LRU from 'lru-cache';

export class GithubService {
    private contributions: LRU.Cache<string, number> = new LRU(config.github.lru);
    private axios: AxiosStatic = Axios;
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
}
