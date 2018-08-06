import { Contact } from "../profile/contact";
import { Education } from "../profile/education";
import { Gallery } from "../profile/gallery"
import { ID } from "../common/id";
import { Info } from "../profile/info";
import { Link } from "../common/link";
import { Location } from "../profile/location";
import { Profile } from "../profile/profile";
import { Project } from "../profile/project";
import { Work } from "../profile/work";

export interface PortfolioDataSource {
    getContact(id: ID): Promise<Contact>;
    getEducation(id: ID): Promise<Education[]>;
    getGallery(id: ID): Promise<Gallery>;
    getInfo(id: ID): Promise<Info>;
    getLinks(id: ID): Promise<Link[]>;
    getLocations(id: ID): Promise<Location[]>;
    getProfile(id: ID): Promise<Profile>;
    getProjects(id: ID): Promise<Project[]>;
    getWork(id: ID): Promise<Work[]>;
}
