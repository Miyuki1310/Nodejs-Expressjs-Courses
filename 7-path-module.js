//path
const path = require("path");

// console.log(path.sep);
// console.log(path.delimiter);

// var directories = path.dirname(__filename);
// console.log(directories);

// const filePath = path.join(directories, "test", "hello.html");
// console.log(filePath);
console.log(__dirname);
console.log(path.resolve("./1-intro.js", "test", "hello.html"));
