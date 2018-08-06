import { HttpController } from "../../node_modules/@yellow-snow/http/lib";
import { Resolve } from "../../node_modules/tsnode-di/lib";
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
import { MemoryPortfolioService } from "../services/memory-portfolio-service";
import { AccessLog } from "../decorators/access-log";

export class PortfolioController extends HttpController {
    @Resolve(MemoryPortfolioService)
    private portfolio_service!: PortfolioDataSource;
    @AccessLog()
    @Log("info")
    public async getContact(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Contact = await this.portfolio_service.getContact(id);
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
    @Log("info")
    public async getEducation(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Education[] = await this.portfolio_service.getEducation(id);
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
    @Log("info")
    public async getGallery(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Gallery = await this.portfolio_service.getGallery(id);
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
    @Log("info")
    public async getInfo(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Info = await this.portfolio_service.getInfo(id);
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
    @Log("info")
    public async getLinks(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Link[] = await this.portfolio_service.getLinks(id);
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
    @Log("info")
    public async getLocations(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Location[] = await this.portfolio_service.getLocations(id);
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
    @Log("info")
    public async getProfile(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Profile = await this.portfolio_service.getProfile(id);
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
    @Log("info")
    public async getProjects(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Project[] = await this.portfolio_service.getProjects(id);
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
    @Log("info")
    public async getWork(): Promise<void> {
        try {
            const id: ID = +this.req.params.id;
            const ret: Work[] = await this.portfolio_service.getWork(id);
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
