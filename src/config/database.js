import mongoose, {connect} from "mongoose";
import {getValue} from "./env.js";
import fs from "node:fs/promises";

/**
 * Connect to the database
 * @returns {Promise<Mongoose>} database
 */
export const linkDatabase = async () => {
const MONGO_URI = getValue("MONGO_URI")
    if(!MONGO_URI) {
        throw new Error("MONGO_URI is not defined");
    }

    return connect(MONGO_URI);
}

/**
 * @returns {Promise<void>}
 */
export const manageDatabase = async () => {

    const collectionList = (await mongoose.connection.db.listCollections().toArray()).map(collection => collection.name);

    if (!collectionList.includes("products")) {
        await mongoose.connection.db.createCollection("products");

        const data = JSON.parse((await fs.readFile("data_to_import.json")).toString());
        await mongoose.model("Product").insertMany(data);

        console.log("Collection 'products' created and data imported");
    }
}