import { Education } from "./education";
import { Contact } from "./contact";
import { Link } from "./link";
import { Location } from "./location";
import { Work } from "./work";
import { File } from "./file";

export interface Info {
    name: string;
    github?: string;
    intro?: string;
    contact?: Contact;
    education?: Education[];
    links?: Link[];
    locations?: Location[];
    projects: string[];
    resume?: File;
    work: Work[];
}
