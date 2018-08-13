import { ID } from "../common/id";
import { Post } from "../post/post";

export interface PostDataSource {
    listPosts(user_id: ID, page_number: number, page_size: number): Promise<Post[]>;
    getPost(post_id: ID): Promise<Post>;
}
