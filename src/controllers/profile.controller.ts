import { HttpController } from "../../node_modules/@yellow-snow/http/lib";
import { Resolve } from "../../node_modules/tsnode-di/lib";
import { AccessLog } from "../decorators/access-log";
import { Log } from "../decorators/log";
import { RateLimit } from "../decorators/rate-limit";
import { ID } from "../models/common/id";
import { Link } from "../models/common/link";
import { ProfileDataSource } from "../models/data-sources/profile-data-source";
import { Contact } from "../models/profile/contact";
import { Education } from "../models/profile/education";
import { Gallery } from "../models/profile/gallery";
import { Info } from "../models/profile/info";
import { Location } from "../models/profile/location";
import { Profile } from "../models/profile/profile";
import { Project } from "../models/profile/project";
import { Work } from "../models/profile/work";
import { MemoryProfileService } from "../services/memory-profile-service";

export class ProfileController extends HttpController {
    @Resolve(MemoryProfileService)
    private profile_service!: ProfileDataSource;
    @AccessLog()
    @RateLimit(10, 10000, 1000)
    @Log("debug")
    public async getContact(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Contact = await this.profile_service.getContact(id);
            if (ret === undefined) {
                this.res.sendStatus(404);
            } else {
                this.res.send(ret);
            }
        } catch (e) {
            console.error(e);
            this.res.sendStatus(500);
        }
    }
    @AccessLog()
    @RateLimit(10, 10000, 1000)
    @Log("debug")
    public async getEducation(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Education[] = await this.profile_service.getEducation(id);
            if (ret === undefined) {
                this.res.sendStatus(404);
            } else {
                this.res.send(ret);
            }
        } catch (e) {
            console.error(e);
            this.res.sendStatus(500);
        }
    }
    @AccessLog()
    @RateLimit(10, 10000, 1000)
    @Log("debug")
    public async getGallery(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Gallery = await this.profile_service.getGallery(id);
            if (ret === undefined) {
                this.res.sendStatus(404);
            } else {
                this.res.send(ret);
            }
        } catch (e) {
            console.error(e);
            this.res.sendStatus(500);
        }
    }
    @AccessLog()
    @RateLimit(10, 10000, 1000)
    @Log("debug")
    public async getInfo(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Info = await this.profile_service.getInfo(id);
            if (ret === undefined) {
                this.res.sendStatus(404);
            } else {
                this.res.send(ret);
            }
        } catch (e) {
            console.error(e);
            this.res.sendStatus(500);
        }
    }
    @AccessLog()
    @RateLimit(10, 10000, 1000)
    @Log("debug")
    public async getLinks(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Link[] = await this.profile_service.getLinks(id);
            if (ret === undefined) {
                this.res.sendStatus(404);
            } else {
                this.res.send(ret);
            }
        } catch (e) {
            console.error(e);
            this.res.sendStatus(500);
        }
    }
    @AccessLog()
    @RateLimit(10, 10000, 1000)
    @Log("debug")
    public async getLocations(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Location[] = await this.profile_service.getLocations(id);
            if (ret === undefined) {
                this.res.sendStatus(404);
            } else {
                this.res.send(ret);
            }
        } catch (e) {
            console.error(e);
            this.res.sendStatus(500);
        }
    }
    @AccessLog()
    @RateLimit(10, 10000, 1000)
    @Log("debug")
    public async getProfile(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Profile = await this.profile_service.getProfile(id);
            if (ret === undefined) {
                this.res.sendStatus(404);
            } else {
                this.res.send(ret);
            }
        } catch (e) {
            console.error(e);
            this.res.sendStatus(500);
        }
    }
    @AccessLog()
    @RateLimit(10, 10000, 1000)
    @Log("debug")
    public async getProjects(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Project[] = await this.profile_service.getProjects(id);
            if (ret === undefined) {
                this.res.sendStatus(404);
            } else {
                this.res.send(ret);
            }
        } catch (e) {
            console.error(e);
            this.res.sendStatus(500);
        }
    }
    @AccessLog()
    @RateLimit(10, 10000, 1000)
    @Log("debug")
    public async getWork(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Work[] = await this.profile_service.getWork(id);
            if (ret === undefined) {
                this.res.sendStatus(404);
            } else {
                this.res.send(ret);
            }
        } catch (e) {
            console.error(e);
            this.res.sendStatus(500);
        }
    }
}
