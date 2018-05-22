import {Provider} from "nconf";

const nconf = require("nconf");
nconf
    .argv()
    .env()
    .file({file: "config/appConfig.json"});

export const config: Provider = nconf;
