import * as functions from 'firebase-functions';
import { HttpRouter } from '@yellow-snow/http';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { routes } from './routes';
import { config } from './config';

const app = express();
app.use(cors());
app.use(bodyParser());

const router = new HttpRouter(routes);
router.init(app);

if (config.target !== 'firebase') {
    app.listen(3000);
}

export const api = functions.https.onRequest(app);
