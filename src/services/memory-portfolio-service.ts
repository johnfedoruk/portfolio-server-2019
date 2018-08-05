
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

export class MemoryPortfolioService implements PortfolioDataSource {
    private portfolios: Profile[] = [
        {
            id: 0,
            info: {
                contact: {
                    emails: [
                        "johnny@johnfedoruk.ca",
                    ],
                    phones: [
                        "(204)250-5147",
                        "077-293-44581",
                    ],
                },
                education: [
                    {
                        "city": "Winnpieg, Canada",
                        "end": "2016",
                        "focus": "Chemistry Minor",
                        "institution": "University of Manitoba",
                        "logo": "https://bit.ly/2sNYXYd",
                        "start": "2010",
                        "url": "https://umanitoba.ca"
                    },
                    {
                        "city": "Winnpieg, Canada",
                        "end": "2016",
                        "focus": "Microbiology Minor",
                        "institution": "University of Manitoba",
                        "logo": "https://bit.ly/2sNYXYd",
                        "start": "2010",
                        "url": "https://umanitoba.ca"
                    },
                    {
                        "city": "Winnpieg, Canada",
                        "end": "2016",
                        "focus": "Computer Science Major",
                        "institution": "University of Manitoba",
                        "logo": "https://bit.ly/2sNYXYd",
                        "start": "2010",
                        "url": "https://umanitoba.ca"
                    }
                ],
                github: "johnfedoruk",
                // tslint:disable:max-line-length
                intro: "My name is John Fedoruk. I'm a software engineer that loves taking on new challenges as an opportunity to learn.",
                links: [

                ],
                locations: [

                ],
                name: "John Fedoruk",
                projects: [

                ],
                work: [],
            },
            photos: {
                "cover-photos": [

                ],
                "profile-photos": [

                ],
            },
        },
    ];
    constructor() {
        if (!this.portfolios) {
            console.error("No memory datastore!");
        }
    }
    public async getContact(_id: ID): Promise<Contact> {
        throw new Error("Method not implemented");
    }
    public async getEducation(id: ID): Promise<Education[]> {
        const profile: Profile = await this.findProfileById(id);
        if (profile === undefined) {
            return <any>undefined;
        }
        const education: Education[] = profile.info.education || [];
        return education;
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
    public async getProfile(id: ID): Promise<Profile> {
        return await this.findProfileById(id);
    }
    public async getWork(_id: ID): Promise<Work[]> {
        throw new Error("Method not implemented");
    }
    public async findProfileById(id: ID): Promise<Profile> {
        const profile: Profile = <Profile>this.portfolios.find(
            profile => profile.id === id,
        );
        return profile;
    }
}
