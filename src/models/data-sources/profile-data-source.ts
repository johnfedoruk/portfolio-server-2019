import { ID } from "../common/id";
import { Link } from "../common/link";
import { Contact } from "../profile/contact";
import { Education } from "../profile/education";
import { Gallery } from "../profile/gallery";
import { Info } from "../profile/info";
import { Location } from "../profile/location";
import { Profile } from "../profile/profile";
import { Project } from "../profile/project";
import { Work } from "../profile/work";

export interface ProfileDataSource {
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
