const fs = require("node:fs");

//Read Streams
const readStream = fs.createReadStream("hello.txt");
readStream.on("data", (chunk) => {
  console.log(chunk.toString());
});

readStream.on("end", () => {
  console.log("Reading completed");
});

//Write Stream
const writeStream = fs.createWriteStream("output.txt");
writeStream.write("hello mojahid\n");
writeStream.write("welcome to write streams");
writeStream.end();

writeStream.on("finish", () => {
  console.log("Writing finished");
});
