import { ID } from "../common/id";

export interface Post {
    id: ID;
    tags: string[];
    created: Date;
    hidden: boolean;
}
