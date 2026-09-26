const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join("core-modules", "file_system.js");

const data = fs.readFileSync(filePath, "utf8");

console.log(data);
