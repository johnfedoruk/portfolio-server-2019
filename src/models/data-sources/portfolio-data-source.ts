import { Contact } from "../profile/contact";
import { Education } from "../profile/education";
import { Gallery } from "../profile/gallery"
import { ID } from "../profile/id";
import { Info } from "../profile/info";
import { Link } from "../profile/link";
import { Profile } from "../profile/profile";
import { Work } from "../profile/work";
import { Location } from "../profile/location";

export interface PortfolioDataSource {
    getContact(id: ID): Promise<Contact>;
    getEducation(id: ID): Promise<Education[]>;
    getGallery(id: ID): Promise<Gallery>;
    getInfo(id: ID): Promise<Info>;
    getLinks(id: ID): Promise<Link[]>;
    getLocations(id: ID): Promise<Location[]>;
    getProfile(id: ID): Promise<Profile>;
    getWork(id: ID): Promise<Work[]>;
}
