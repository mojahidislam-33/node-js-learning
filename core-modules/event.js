const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("login", () => {
  console.log("User logged in");
});

emitter.emit("login");

//Event trigger করার সময় data পাঠানো যায়
emitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

emitter.emit("greet", "mojahid");

//একাধিক Data পাঠানো
emitter.on("user", (Name, age) => {
  console.log(`User name:${Name} and age:${age}`);
});
emitter.emit("user", "mojahid", 24);

//event listener শুধু একবার execute করবে।
emitter.once("welcome", () => {
  console.log("Welcome!");
});

emitter.emit("welcome");
emitter.emit("welcome");
