import { Photo } from "../common/photo";

export interface Gallery {
    "cover-photos": Photo[];
    "profile-photos": Photo[];
    [key: string]: Photo[];
}
