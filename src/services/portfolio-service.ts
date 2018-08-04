
import { PortfolioDataSource } from "../models/data-sources/portfolio-data-source";
import { Contact } from "../models/profile/contact";
import { Education } from "../models/profile/education";
import { Gallery } from "../models/profile/gallery";
import { ID } from "../models/profile/id";
import { Info } from "../models/profile/info";
import { Link } from "../models/profile/link";
import { Location } from "../models/profile/location";
import { Profile } from "../models/profile/profile";
import { Work } from "../models/profile/work";

export class PortfolioService implements PortfolioDataSource {
    public async getContact(_id: ID): Promise<Contact> {
        throw new Error("Method not implemented");
    }
    public async getEducation(_id: ID): Promise<Education[]> {
        throw new Error("Method not implemented");
    }
    public async getGallery(_id: ID): Promise<Gallery> {
        throw new Error("Method not implemented");
    }
    public async getInfo(_id: ID): Promise<Info> {
        throw new Error("Method not implemented");
    }
    public async getLinks(_id: ID): Promise<Link[]> {
        throw new Error("Method not implemented");
    }
    public async getLocations(_id: ID): Promise<Location[]> {
        throw new Error("Method not implemented");
    }
    public async getProfile(_id: ID): Promise<Profile> {
        throw new Error("Method not implemented");
    }
    public async getWork(_id: ID): Promise<Work[]> {
        throw new Error("Method not implemented");
    }
}
