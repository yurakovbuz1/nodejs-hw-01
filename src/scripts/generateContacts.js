import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from "node:fs/promises";

const generateContacts = async (number) => {

    fs.readFile(PATH_DB, { encoding: "UTF-8" })
        .then((data) => JSON.parse(data))
        .then((contacts) => {
            for (let i = 0; i < number; i++) {
                contacts.push(createFakeContact());
            }
            fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        })
        .catch((error) => console.log("error: ", error));
};

generateContacts(3);
