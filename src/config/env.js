import dotenv from 'dotenv';
import {env} from "node:process";

export const getValue = (key, defaultValue = undefined) => {
    dotenv.config();

    return env[key] || defaultValue;
}