const path = require("node:path");

//find directory name in CWD
console.log(__dirname);

//find file name in CWD
console.log(__filename);

//দুই বা তার বেশি path একসাথে join করতে ব্যবহার হয়
// University/Students/data.txt
const filePath = path.join("University", "Students", "data.txt");
console.log(filePath);

//path.resolve একটি absolute path তৈরি করে।
const resolvedPath = path.resolve(filePath);
console.log(resolvedPath);

//path.basename, Path থেকে শেষের file/directory name বের করে।
console.log(path.basename(filePath));

// path.parsa,একটি path-কে বিভিন্ন অংশে ভেঙে দেয়।
const result = path.parse(filePath);
console.log(result);
console.log(path.parse(resolvedPath));
