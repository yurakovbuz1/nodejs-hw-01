import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";

export const countContacts = async () => {
    return fs.readFile(PATH_DB, { encoding: "UTF-8" })
        .then((data) => JSON.parse(data))
        .then((contacts) => contacts.length)
        .catch((error) => console.log("error: ", error));
};

console.log(await countContacts());
