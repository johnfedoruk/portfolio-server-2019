import { HttpController } from "@yellow-snow/http";
import { Resolve } from "tsnode-di/lib";

import { AccessLog } from "../decorators/access-log";
import { Log } from "../decorators/log";
import { ID } from "../models/common/id";
import { PostDataSource } from "../models/data-sources/post-data-source";
import { Post } from "../models/post/post";
import { MemoryPostService } from "../services/memory-post-service";
import { RateLimit } from "../decorators/rate-limit";

export class PostController extends HttpController {
    @Resolve(MemoryPostService)
    private post_service!: PostDataSource;
    @AccessLog()
    @RateLimit(10, 10000, 1000)
    @Log("info")
    public async listPosts(): Promise<void> {
        try {
            const user: ID = +this.req.params.id;
            const page: number | undefined = +this.req.query.page || undefined;
            const size: number | undefined = +this.req.query.size || undefined;
            const ret: Post[] = await this.post_service.listPosts(user, page as number, size as number);
            if (ret === undefined) {
                this.res.sendStatus(404);
            } else {
                this.res.send(ret);
            }
        } catch (e) {
            console.error(e);
            this.res.sendStatus(500);
        }
    }
    @AccessLog()
    @RateLimit(10, 10000, 1000)
    @Log("info")
    public async getPost(): Promise<void> {
        try {
            const post: ID = +this.req.params.id;
            const ret: Post = await this.post_service.getPost(post);
            if (ret === undefined) {
                this.res.sendStatus(404);
            } else {
                this.res.send(ret);
            }
        } catch (e) {
            console.error(e);
            this.res.sendStatus(500);
        }
    }
}
