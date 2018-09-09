import { ID } from "../common/id";
import { Gallery } from "./gallery";
import { Info } from "./info";

export interface Profile {
    id: ID;
    info: Info;
    photos: Gallery;
}
