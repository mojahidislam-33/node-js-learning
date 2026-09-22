const cluster = require("node:cluster");
const http = require("node:http");
const os = require("node:os");

if (cluster.isPrimary) {
  console.log(`primary process: ${process.pid}`);

  const cpuCount = os.cpus().length;
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
} else {
  const server = http.createServer((req, res) => {
    res.end(`Hello from worker process: ${process.pid}`);
  });

  server.listen(3000);
  console.log(`worker started : ${process.pid}`);
}
