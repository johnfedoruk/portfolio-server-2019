import { Photo } from "./photo";

export interface Gallery {
    "cover-photos": Photo[];
    "profile-photos": Photo[];
    [key: string]: Photo[];
}
