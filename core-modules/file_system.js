const fs = require("node:fs");

//create and write file
fs.writeFileSync("hello.txt", "Hello Node.js!");

// read file syn
const data = fs.readFileSync("hello.txt", "utf8");
console.log("From Sync:", data);

// read file Asyn
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Asysn function : ", data);
});

//ধরো existing file-এর content replace করতে চাও
fs.writeFileSync("hello.txt", "new content");

const newData = fs.readFileSync("hello.txt", "utf8");
console.log("after replace : ", newData);

//Existing content রেখে শেষে নতুন content যোগ করতে
fs.appendFileSync("hello.txt", ".welcome to node.js");

const finalData = fs.readFileSync("hello.txt", "utf8");
console.log("final data : ", finalData);
