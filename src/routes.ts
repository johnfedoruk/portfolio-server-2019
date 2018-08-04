import { HttpRoute } from '@yellow-snow/http';
import { PingController } from './controllers/ping.controller';

export const routes: HttpRoute<any>[] = [
    new HttpRoute('/ping','get',PingController,'ping'),
];
