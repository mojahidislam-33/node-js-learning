const buffer = Buffer.from("Hello Node.js");

console.log("Buffer:", buffer);

console.log("String:", buffer.toString());

console.log("Length:", buffer.length);

console.log("First byte:", buffer[0]);

buffer[0] = 65;

console.log("First letter change H to A:", buffer.toString());
