import express, {Router} from "express";
import dotenv from "dotenv";
import {manageRoutes} from "./routes/route.js";
import {linkDatabase} from "./config/database.js";
import {startServer} from "./config/express.js";


(async () => {
    const app = express();
    const router = Router();

    await manageRoutes(router);
    await linkDatabase()

    await startServer(app, [router]);
})();

