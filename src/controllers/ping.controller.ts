import { HttpController } from "@yellow-snow/http";
import { Resolve } from "tsnode-di";

import { PingService } from "../services/ping-service";
import { AccessLog } from "../decorators/access-log";

export class PingController extends HttpController {
    @Resolve(PingService)
    private ping_service!: PingService;
    @AccessLog()
    public async ping(): Promise<void> {
        try {
            const response: string = await this.ping_service.ping();
            this.res.send(response);
        } catch (e) {
            console.error(e);
            this.res.sendStatus(500);
        }
    }
}
