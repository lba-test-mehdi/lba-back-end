import {env} from "node:process";
import {json, urlencoded} from "express";
import {getValue} from "./env.js";

const API_PORT = getValue("API_PORT", 5000);

/**
 * Start the server
 * @param {Express} app
 */
export const startServer = async (app, routers = []) => {

    app.use(json())
    app.use(urlencoded({ extended: true }))

    routers.forEach(router => {
        app.use(router);
    });

    await app.listen(API_PORT, () => {
        console.log(`Server is running on port ${API_PORT}`);
    });
}