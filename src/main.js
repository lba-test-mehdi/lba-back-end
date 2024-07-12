import express, {Router} from "express";
import {manageRoutes} from "./routes/route.js";
import {linkDatabase, manageDatabase} from "./config/database.js";
import {startServer} from "./config/express.js";


(async () => {
    const app = express();
    const router = Router();

    await manageRoutes(router);
     await linkDatabase()
    await manageDatabase();

    await startServer(app, [router]);
})();

