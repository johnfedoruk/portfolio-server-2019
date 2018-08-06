import { PostDataSource } from "../models/data-sources/post-data-source";
import { ID } from "../models/common/id";
import { Post } from "../models/post/post";
import { ArticlePost } from "../models/post/article-post";
import { StatusPost } from "../models/post/status-post";

type UserPosts = { user: ID, posts: Post[] };
const MIN_PAGE_NUMBER: number = 1;
const MAX_PAGE_SIZE: number = 100;

export class MemoryPostService implements PostDataSource {
    private posts: UserPosts[] = [
        {
            user: 0,
            posts: [
                <ArticlePost> {
                    id: 0,
                    tags: [],
                    created: new Date(),
                    hidden: false,
                    title: 'First post!',
                    description: 'This is my first post.',
                    article: '## Hello world'
                },
                <StatusPost> {
                    id: 1,
                    tags: [],
                    created: new Date(),
                    hidden: false,
                    status: 'This is my first status post!!'
                },
                <StatusPost> {
                    id: 3,
                    tags: [],
                    created: new Date(),
                    hidden: false,
                    status: 'Hello, world'
                }
            ]
        },
        {
            user: 1,
            posts: [
                <ArticlePost> {
                    id: 2,
                    tags: [],
                    created: new Date(),
                    hidden: false,
                    title: 'Hello, world',
                    description: 'Lorem Ipsum',
                    article: '# Hi!'
                },
            ]
        }
    ];
    public async listPosts(user_id: ID, page_number: number = MIN_PAGE_NUMBER, page_size: number  = MAX_PAGE_SIZE): Promise<Post[]> {
        const posts = await this.findUserPosts(user_id);
        if (posts===undefined) {
            return posts;
        }
        const start: number = (Math.max(page_number, MIN_PAGE_NUMBER) - 1) * Math.min(page_size, MAX_PAGE_SIZE);
        const end: number = Math.max(page_number, MIN_PAGE_NUMBER) * Math.min(page_size, MAX_PAGE_SIZE);
        return posts.slice(start, end);
    }
    public async getPost(post_id: ID): Promise<Post> {
        let found: Post | undefined = undefined;
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
        return <Post>found;
    }
    private async findUserPosts(user_id: ID): Promise<Post[]> {
        const user_posts: UserPosts = <UserPosts>this.posts.find(
            v => v.user === user_id
        );
        if (user_posts === undefined) {
            return user_posts;
        }
        return user_posts.posts;
    }
}
