import { Education } from "./education";
import { Contact } from "./contact";
import { Link } from "./link";
import { Location } from "./location";
import { Work } from "./work";

export interface Info {
    name: string;
    github?: string;
    intro?: string;
    contact?: Contact;
    education?: Education[];
    links?: Link[];
    locations?: Location[];
    projects: string[];
    resume: string;
    work: Work[];
}
