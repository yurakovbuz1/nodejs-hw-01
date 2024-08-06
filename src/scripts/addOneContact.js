import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from "node:fs/promises";


export const addOneContact = async () => {
     fs.readFile(PATH_DB, { encoding: "UTF-8" })
        .then((data) => JSON.parse(data))
        .then((contacts) => {            
            contacts.push(createFakeContact());            
            fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        });
};

addOneContact();
