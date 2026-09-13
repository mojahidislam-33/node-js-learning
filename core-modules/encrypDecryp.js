const crypto = require("node:crypto");

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

/*crypto.createCipheriv(): এই ফাংশনটি আমাদের দেওয়া algorithm, key এবং
iv ব্যবহার করে একটি Cipher instance বা অবজেক্ট তৈরি করে, 
যা ডেটা এনক্রিপ্ট করার জন্য প্রস্তুত থাকে। 

cipher.update(): এটি মূল ডেটা বা Plaintext-কে ("Hello MOJAHID")
এনক্রিপ্ট করা শুরু করে। "utf8": ইনপুট ডেটার ফরম্যাট বা এনকোডিং (Encoding) কি,
 তা নির্দেশ করে। "hex": এনক্রিপ্ট হওয়া আউটপুটটি আমরা কী ফরম্যাটে দেখতে চাই
(Hexadecimal string হিসেবে) তা নির্ধারণ করে।

cipher.final("hex"): এনক্রিপশনের শেষ ধাপ। অনেক সময় ডেটার ব্লক সাইজ 
মেলানোর জন্য মেমোরিতে কিছু অবশিষ্ট ডেটা বা Padding থাকে। এই ফাংশনটি সেই শেষ অংশটুকুকে 
এনক্রিপ্ট করে এবং আগের encrypted স্ট্রিংয়ের সাথে যুক্ত করে দেয়। এরপর এই cipher
অবজেক্টটি আর ব্যবহার করা যায় না।
*/

const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted = cipher.update("Hello MOJAHID", "utf8", "hex");

encrypted += cipher.final("hex");

console.log("encrypted value: ", encrypted);

// Decryption
const decipher = crypto.createDecipheriv(algorithm, key, iv);

let decrypted = decipher.update(encrypted, "hex", "utf8");

decrypted += decipher.final("utf8");

console.log("Decrypted (Plaintext):", decrypted);
