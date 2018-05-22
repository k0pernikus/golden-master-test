const mkdirp = require("mkdirp-promise");
import * as fs from "mz/fs";

export const storeCsv = async (csvContent: string,
                               file: string = "data.csv",
                               path: string = "./out"): Promise<void> => {
    await mkdirp(path);
    const csvFile = `${path}/${file}`;

    return fs.writeFile(csvFile, csvContent);
};
