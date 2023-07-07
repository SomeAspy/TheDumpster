const fileLocation = "./simpleDB.json";

import { writeFileSync, readFile } from "fs";

export async function readJSON() {
    let out;
    return new Promise((resolve, reject) => {
        readFile(fileLocation, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                try {
                    out = JSON.parse(data);
                } catch (err) {
                    console.error(`[FATAL JSON ERROR]: ${err}`);
                    process.exit(1);
                }
                resolve(out);
            }
        }
        );
    }).catch(err => console.log(err));
}

export async function getBase(key) {
    let JSONFile = await readJSON();
    if (JSONFile[key]) {
        return JSONFile[key];
    }
    else {
        return false;
    }
}