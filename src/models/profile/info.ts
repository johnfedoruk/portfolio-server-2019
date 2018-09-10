import { File } from "../common/file";
import { Link } from "../common/link";
import { Contact } from "./contact";
import { Education } from "./education";
import { Location } from "./location";
import { Project } from "./project";
import { Work } from "./work";

export interface Info {
    name: string;
    github?: string;
    intro?: string;
    contact?: Contact;
    education?: Education[];
    links?: Link[];
    locations?: Location[];
    projects: Project[];
    resume?: File;
    work: Work[];
}
