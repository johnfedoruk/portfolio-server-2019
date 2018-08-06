
import { Log } from "../decorators/log";
import { PortfolioDataSource } from "../models/data-sources/portfolio-data-source";
import { Contact } from "../models/profile/contact";
import { Education } from "../models/profile/education";
import { Gallery } from "../models/profile/gallery";
import { ID } from "../models/common/id";
import { Info } from "../models/profile/info";
import { Link } from "../models/common/link";
import { Location } from "../models/profile/location";
import { Profile } from "../models/profile/profile";
import { Project } from "../models/profile/project";
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
                        city: "Winnpieg, Canada",
                        end: "2016",
                        focus: "Chemistry Minor",
                        institution: "University of Manitoba",
                        logo: "https://bit.ly/2sNYXYd",
                        start: "2010",
                        url: "https://umanitoba.ca",
                    },
                    {
                        city: "Winnpieg, Canada",
                        end: "2016",
                        focus: "Microbiology Minor",
                        institution: "University of Manitoba",
                        logo: "https://bit.ly/2sNYXYd",
                        start: "2010",
                        url: "https://umanitoba.ca",
                    },
                    {
                        city: "Winnpieg, Canada",
                        end: "2016",
                        focus: "Computer Science Major",
                        institution: "University of Manitoba",
                        logo: "https://bit.ly/2sNYXYd",
                        start: "2010",
                        url: "https://umanitoba.ca",
                    },
                ],
                github: "johnfedoruk",
                // tslint:disable:max-line-length
                intro: "My name is John Fedoruk. I'm a software engineer that loves taking on new challenges as an opportunity to learn.",
                links: [
                    {
                        name: "Blog",
                        url: "https://blog.johnfedoruk.ca",
                    },
                ],
                locations: [
                    {
                        city: "Winnipeg",
                        country: "Canada",
                        end: "2016-09",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEfq9f-QPnHAjjaJZAjBh-3CwjsHl4oK1vR3Sm8mBWI71OKAT",
                        start: "1991-01",
                        url: "https://www.winnipeg.ca",
                    },
                    {
                        city: "London",
                        country: "England",
                        end: "2017-09",
                        logo: "http://bit.ly/2sDeFqg",
                        start: "2016-09",
                        url: "https://www.cityoflondon.gov.uk",
                    },
                    {
                        city: "Winnipeg",
                        country: "Canada",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEfq9f-QPnHAjjaJZAjBh-3CwjsHl4oK1vR3Sm8mBWI71OKAT",
                        start: "2017-09",
                        url: "https://www.winnipeg.ca",
                    },
                ],
                name: "John Fedoruk",
                projects: [
                    {
                        end: "2016-02",
                        logo: "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAcmAAAAJGJjOGM0M2Q4LTRmZWQtNDUyZi04ZTY0LTUyY2I4M2E3NjhmMA.png",
                        name: "Just Eat Careers",
                        role: "Fullstack Software Engineer",
                        start: "2015-12",
                        url: "https://careers.just-eat.com",
                    },
                    {
                        end: "2016-08",
                        logo: "https://www.fidelity.com.hk/static/style/images/fidelity.jpg",
                        name: "Early Careers at Fidelity",
                        role: "Fullstack Software Engineer / Architecture / Security",
                        start: "2016-05",
                        url: "https://earlycareersatfidelity.com",
                    },
                ],
                work: [
                    {
                        city: "Winnipeg, Canada",
                        company: "Pandora Inn",
                        end: "2016-09",
                        logo: "http://pandorainn.ca/images/logos/logo.jpg",
                        start: "2008-01",
                        title: "Bartender / Floor Manager",
                        url: "http://pandorainn.ca",
                    },
                    {
                        city: "Winnipeg, Canada",
                        company: "University of Manitoba",
                        end: "2015-03",
                        logo: "https://bit.ly/2sNYXYd",
                        start: "2014-12",
                        title: "Bioinformatics Consultant",
                        url: "https://umanitoba.ca",
                    },
                    {
                        city: "Winnipeg, Canada",
                        company: "WPG I.T.",
                        logo: "https://wpgit.ca/images/logo/logo%2050.png",
                        start: "2016-04",
                        title: "Founder",
                        url: "https://wpgit.ca",
                    },
                    {
                        city: "London, England",
                        company: "Wiser",
                        logo: "https://bit.ly/2s81PwI",
                        start: "2016-10",
                        title: "Software Engineer / DevOps",
                        url: "https://wearewiser.com",
                    },
                    {
                        city: "Winnipeg, Canada",
                        company: "University of Manitoba",
                        logo: "https://bit.ly/2sNYXYd",
                        start: "2017-10",
                        title: "Application Developer",
                        url: "https://umanitoba.ca",
                    },
                ],
            },
            photos: {
                "cover-photos": [
                    {
                        description: "This is me, as a lego man",
                        name: "Lego John.jpg",
                        tags: [],
                        title: "Lego John",
                        url: "https://firebasestorage.googleapis.com/v0/b/tech-profile.appspot.com/o/johnfedoruk%2Fcover-photos%2Fbanana.jpg?alt=media&token=ca14941c-782b-41e1-b17d-4200c9ac4c14",
                    },
                ],
                "profile-photos": [
                    {
                        description: "",
                        name: "profile1.jpg",
                        tags: [],
                        title: "",
                        url: "https://firebasestorage.googleapis.com/v0/b/tech-profile.appspot.com/o/johnfedoruk%2Fprofile-photos%2F1146708_10151769164373189_442127000_n.jpg?alt=media&token=4c2dfeb7-24fd-4960-9a02-a82bfee67c83",
                    },
                    {
                        description: "",
                        name: "profile2.jpg",
                        tags: [],
                        title: "",
                        url: "https://firebasestorage.googleapis.com/v0/b/tech-profile.appspot.com/o/johnfedoruk%2Fprofile-photos%2F57976_439361923188_6010309_n.jpg?alt=media&token=9879a95b-808f-4e73-87f4-519e5c90cbd3",
                    },
                    {
                        description: "#WPGIT T-Shirt",
                        name: "Contracting.jpg",
                        tags: [],
                        title: "Contracting",
                        url: "http://johnfedoruk.ca/php/?content=image&user_id=1&album=Profile%20Photos&image=Smile.jpg",
                    },
                ],
            },
        },
    ];
    constructor() {
        if (!this.portfolios) {
            console.error("No memory datastore!");
        }
    }
    @Log()
    public async getContact(id: ID): Promise<Contact> {
        const profile: Profile = await this.findProfileById(id);
        if (profile === undefined) {
            return undefined as any;
        }
        const contact: Contact = <Contact>profile.info.contact;
        return contact;
    }
    @Log()
    public async getEducation(id: ID): Promise<Education[]> {
        const profile: Profile = await this.findProfileById(id);
        if (profile === undefined) {
            return undefined as any;
        }
        const education: Education[] = profile.info.education || [];
        return education;
    }
    @Log()
    public async getGallery(id: ID): Promise<Gallery> {
        const profile: Profile = await this.findProfileById(id);
        if (profile === undefined) {
            return undefined as any;
        }
        const gallery: Gallery = profile.photos;
        return gallery;
    }
    @Log()
    public async getInfo(id: ID): Promise<Info> {
        const profile: Profile = await this.findProfileById(id);
        if (profile === undefined) {
            return undefined as any;
        }
        const info: Info = profile.info;
        return info;
    }
    @Log()
    public async getLinks(id: ID): Promise<Link[]> {
        const profile: Profile = await this.findProfileById(id);
        if (profile === undefined) {
            return undefined as any;
        }
        const links: Link[] = profile.info.links || [];
        return links;
    }
    @Log()
    public async getLocations(id: ID): Promise<Location[]> {
        const profile: Profile = await this.findProfileById(id);
        if (profile === undefined) {
            return undefined as any;
        }
        const locations: Location[] = profile.info.locations || [];
        return locations;
    }
    @Log()
    public async getProfile(id: ID): Promise<Profile> {
        return await this.findProfileById(id);
    }
    @Log()
    public async getProjects(id: ID): Promise<Project[]> {
        const profile: Profile = await this.findProfileById(id);
        if (profile === undefined) {
            return undefined as any;
        }
        const projects: Project[] = profile.info.projects || [];
        return projects;
    }
    @Log()
    public async getWork(id: ID): Promise<Work[]> {
        const profile: Profile = await this.findProfileById(id);
        if (profile === undefined) {
            return undefined as any;
        }
        const work: Work[] = profile.info.work || [];
        return work;
    }
    @Log()
    public async findProfileById(id: ID): Promise<Profile> {
        const profile: Profile = this.portfolios.find(
            (curr: Profile) => curr.id === id,
        ) as Profile;
        return profile;
    }
}
