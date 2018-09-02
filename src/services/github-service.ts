import Axios, { AxiosStatic, AxiosResponse } from 'axios';
export class GithubService {
    private axios: AxiosStatic = Axios;
    public async getContributions(username: string): Promise<number> {
        const url: string = `https://github.com/users/${username}/contributions`;
        const res: AxiosResponse<string> = await this.axios.get(url);
        const body: string = <string>res.data;
        const regex = /mb-2\">([\s\S]*?)contributions/im;
        const contributions: number = +(<string>(<any>body).match(regex)[1].replace(/[^0-9]/g,''));
        return contributions;
    }
}
