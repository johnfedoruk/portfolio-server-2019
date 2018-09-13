import { HttpController } from "@yellow-snow/http";
import { Resolve } from "tsnode-di";
import { AccessLog } from "../decorators/access-log";
import { Log } from "../decorators/log";
import { RateLimit } from "../decorators/rate-limit";
import { TwitterService } from "../services/twitter-service";

export class TwitterController extends HttpController {
    @Resolve(TwitterService)
    private twitter_service!: TwitterService;
    @AccessLog()
    @RateLimit(10, 10000, 1000)
    @Log("debug")
    public async getTweets(): Promise<void> {
        try {
            const username: string = this.req.params.username;
            const opts: any = this.req.query;
            const tweets = await this.twitter_service.getTweets(username, opts);
            this.res.send(tweets);
        } catch (e) {
            this.res.sendStatus(500);
        }
    }
}
