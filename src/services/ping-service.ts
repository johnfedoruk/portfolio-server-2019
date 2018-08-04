export class PingService {
    private response: string;
    constructor() {
        this.response = "PONG";
    }
    public async ping(): Promise<string> {
        return this.response;
    }
}
