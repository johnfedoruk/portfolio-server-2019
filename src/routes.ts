import { HttpRoute } from '@yellow-snow/http';
import { PingController } from './controllers/ping.controller';
import { PortfolioController } from './controllers/portfolio.controller';

export const routes: HttpRoute<any>[] = [
    new HttpRoute('/ping', 'get', PingController, 'ping'),
    new HttpRoute('/portfolio/:id/contact', 'get', PortfolioController, 'getContact'),
    new HttpRoute('/portfolio/:id/education', 'get', PortfolioController, 'getEducation'),
    new HttpRoute('/portfolio/:id/gallery', 'get', PortfolioController, 'getGallery'),
    new HttpRoute('/portfolio/:id/info', 'get', PortfolioController, 'getInfo'),
    new HttpRoute('/portfolio/:id/links', 'get', PortfolioController, 'getLinks'),
    new HttpRoute('/portfolio/:id/locations', 'get', PortfolioController, 'getLocations'),
    new HttpRoute('/portfolio/:id/profile', 'get', PortfolioController, 'getProfile'),
    new HttpRoute('/portfolio/:id/projects', 'get', PortfolioController, 'getProjects'),
    new HttpRoute('/portfolio/:id/work', 'get', PortfolioController, 'getWork'),
];
