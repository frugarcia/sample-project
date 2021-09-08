const path = require("path");

require("dotenv").config({
  path:
    process.env.NODE_ENV === "development"
      ? path.resolve(process.cwd(), "./env/.env.dev")
      : path.resolve(process.cwd(), "./.env"),
});

const moment = require("moment");

import * as momentTZ from "moment-timezone";

momentTZ.tz.setDefault("Europe/Madrid");
const formatDate = moment().format("DD/MM/YYYY - HH:mm:ss");

console.log("Format Time");
console.log(formatDate);

console.log("Enviroment Variable");
console.log(process.env["NAME"]);
console.log("---");

console.log("Proyecto de prueba");
console.log(new Date());
