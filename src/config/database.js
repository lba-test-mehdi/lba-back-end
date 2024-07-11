import {connect} from "mongoose";
import {env} from "node:process";
import {getValue} from "./env.js";

export const linkDatabase = async () => {
const MONGO_URI = getValue("MONGO_URI")
    if(!MONGO_URI) {
        throw new Error("MONGO_URI is not defined");
    }

    await connect(MONGO_URI);
    console.log("Connected to MongoDB");
}