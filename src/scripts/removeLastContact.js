import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";

export const removeLastContact = async () => {
    fs.readFile(PATH_DB, { encoding: "UTF-8" })
        .then((data) => JSON.parse(data))
        .then((contacts) => {
            contacts.pop();
            fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        })
        .catch((error) => console.log("error: ", error));
};

removeLastContact();
