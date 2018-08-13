import { Post } from "./post";

export interface ArticlePost extends Post {
    title: string;
    description: string;
    article: string;
}
