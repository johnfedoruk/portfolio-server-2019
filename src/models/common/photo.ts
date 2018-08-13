import { File } from './file';

export interface Photo extends File {
    description?: string;
    title?: string;
    tags: string[];
}
