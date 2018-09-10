import { Log } from "../decorators/log";

export class PingService {
    private response: string;
    constructor() {
        this.response = "Pong";
    }
    @Log()
    public async ping(): Promise<string> {
        return this.response;
    }
}
