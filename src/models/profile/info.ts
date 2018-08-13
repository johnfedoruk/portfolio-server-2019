import { Education } from "./education";
import { Contact } from "./contact";
import { Link } from "../common/link";
import { Location } from "./location";
import { Work } from "./work";
import { File } from "../common/file";
import { Project } from "./project";

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
