const { Worker } = require("node:worker_threads");

const worker = new Worker("./worker.js");

worker.on("message", (result) => {
  console.log("Result: ", result);
});

worker.on("error", (error) => {
  console.log("Error:", error.message);
});

worker.on("exit", (code) => {
  console.log("Worker exited with code:", code);
});

console.log("Main thread is running...");
