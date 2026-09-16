const { exec, spawn, execFile, fork } = require("node:child_process");

// for exec() callback function in windows
exec("dir", (error, stdout, stderr) => {
  if (error) {
    console.log(error.message);
    return;
  }

  console.log(stdout);
});

// spawn() function
const child = spawn("node", ["-v"]);

child.stdout.on("data", (data) => {
  console.log("Output:", data.toString());
});

child.stderr.on("data", (data) => {
  console.log("Error:", data.toString());
});

child.on("close", (code) => {
  console.log("process finished with code:", code);
});

//execfile()
execFile("node", ["-v"], (error, stdout, stderr) => {
  if (error) {
    console.log(error.message);
    return;
  }

  console.log("node version:", stdout);
});

//fork()
const childProcess = fork("child.js");
childProcess.on("message", (message) => {
  console.log("Message from child:", message);
});
