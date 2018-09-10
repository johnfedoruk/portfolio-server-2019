import { HttpRouter } from "@yellow-snow/http";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as functions from "firebase-functions";
import { routes } from "./routes";

const app = express();
app.use(cors());
app.use(bodyParser());

const router = new HttpRouter(routes);
router.init(app);

if (!process.env.FIREBASE_CONFIG) {
    app.listen(3000);
}

export const api = functions.https.onRequest(app);
