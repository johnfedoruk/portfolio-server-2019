import { HttpRouter } from '@yellow-snow/http';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { routes } from './routes';

const app = express();
app.use(cors());
app.use(bodyParser());

const router = new HttpRouter(routes);
router.init(app);

app.listen(3000);
