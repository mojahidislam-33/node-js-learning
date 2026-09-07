const os = require("node:os");

console.log("OS:", os.type());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());

console.log("CPU Cores:", os.cpus().length);

console.log(
  "Total Memory:",
  (os.totalmem() / 1024 / 1024 / 1024).toFixed(2),
  "GB",
);

console.log(
  "Free Memory:",
  (os.freemem() / 1024 / 1024 / 1024).toFixed(2),
  "GB",
);

console.log("Home Directory:", os.homedir());
console.log("Hostname:", os.hostname());
console.log("Username:", os.userInfo().username);
