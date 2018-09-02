import { Log } from "../decorators/log";

export class PingService {
    private response: string;
    constructor() {
        this.response = "PONG";
    }
    @Log()
    public async ping(): Promise<string> {
        return this.response;
    }
}
