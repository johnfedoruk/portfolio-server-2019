import { HttpRoute } from '@yellow-snow/http';
import { PingController } from './controllers/ping.controller';
import { ProfileController } from './controllers/profile.controller';
import { PostController } from './controllers/post.controller';
import { GithubController } from './controllers/github.controller';

export const routes: HttpRoute<any>[] = [
    new HttpRoute('/ping', 'get', PingController, 'ping'),
    new HttpRoute('/portfolio/:id/contact', 'get', ProfileController, 'getContact'),
    new HttpRoute('/portfolio/:id/education', 'get', ProfileController, 'getEducation'),
    new HttpRoute('/portfolio/:id/gallery', 'get', ProfileController, 'getGallery'),
    new HttpRoute('/portfolio/:id/info', 'get', ProfileController, 'getInfo'),
    new HttpRoute('/portfolio/:id/links', 'get', ProfileController, 'getLinks'),
    new HttpRoute('/portfolio/:id/locations', 'get', ProfileController, 'getLocations'),
    new HttpRoute('/portfolio/:id/profile', 'get', ProfileController, 'getProfile'),
    new HttpRoute('/portfolio/:id/projects', 'get', ProfileController, 'getProjects'),
    new HttpRoute('/portfolio/:id/work', 'get', ProfileController, 'getWork'),
    new HttpRoute('/portfolio/:id/posts', 'get', PostController, 'listPosts'),
    new HttpRoute('/portfolio/post/:id', 'get', PostController, 'getPost'),
    new HttpRoute('/github/contributions/:username', 'get', GithubController, 'getContributions'),
];
