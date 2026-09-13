const crypto = require("node:crypto");

const data = "MOJAHID ISLAM";

const hash = crypto.createHash("sha256").update(data).digest("hex");

console.log("Original:", data);
console.log("Hash:", hash);

//Crypto module দিয়ে secure random bytes or random token তৈরি করা যায়।
const random = crypto.randomBytes(16).toString("hex");
console.log("Random Value : ", random);

//crypto দিয়ে UUID তৈরি করা যায়
const id = crypto.randomUUID(); //Universally Unique Identifier
console.log("UUID : ", id);
