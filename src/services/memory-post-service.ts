import { ID } from "../models/common/id";
import { PostDataSource } from "../models/data-sources/post-data-source";
import { ArticlePost } from "../models/post/article-post";
import { Post } from "../models/post/post";
import { StatusPost } from "../models/post/status-post";

interface UserPosts { user: ID; posts: Post[]; }
const MIN_PAGE_NUMBER: number = 1;
const MAX_PAGE_SIZE: number = 100;

export class MemoryPostService implements PostDataSource {
    private posts: UserPosts[] = [
        {
            posts: [
                {
                    article: "## Hello world",
                    created: new Date(),
                    description: "This is my first post.",
                    hidden: false,
                    id: 0,
                    tags: [],
                    title: "First post!",
                } as ArticlePost,
                {
                    created: new Date(),
                    hidden: false,
                    id: 1,
                    status: "This is my first status post!!",
                    tags: [],
                } as StatusPost,
                {
                    created: new Date(),
                    hidden: false,
                    id: 3,
                    status: "Hello, world",
                    tags: [],
                } as StatusPost,
            ],
            user: 0,
        },
        {
            posts: [
                {
                    article: "# Hi!",
                    created: new Date(),
                    description: "Lorem Ipsum",
                    hidden: false,
                    id: 2,
                    tags: [],
                    title: "Hello, world",
                } as ArticlePost,
            ],
            user: 1,
        },
    ];
    public async listPosts(
        user_id: ID,
        page_number: number = MIN_PAGE_NUMBER,
        page_size: number  = MAX_PAGE_SIZE,
    ): Promise<Post[]> {
        const posts = await this.findUserPosts(user_id);
        if (posts === undefined) {
            return posts;
        }
        const start: number = (Math.max(page_number, MIN_PAGE_NUMBER) - 1) * Math.min(page_size, MAX_PAGE_SIZE);
        const end: number = Math.max(page_number, MIN_PAGE_NUMBER) * Math.min(page_size, MAX_PAGE_SIZE);
        return posts.slice(start, end);
    }
    public async getPost(post_id: ID): Promise<Post> {
        let found: Post | undefined;
        for (const user_post of this.posts) {
            for (const post of user_post.posts) {
                if (post.id === post_id) {
                    found = post;
                    break;
                }
            }
            if (found !== undefined) {
                break;
            }
        }
        return found as Post;
    }
    private async findUserPosts(user_id: ID): Promise<Post[]> {
        const user_posts: UserPosts = this.posts.find(
            (v) => v.user === user_id,
        ) as UserPosts;
        if (user_posts === undefined) {
            return user_posts;
        }
        return user_posts.posts;
    }
}
