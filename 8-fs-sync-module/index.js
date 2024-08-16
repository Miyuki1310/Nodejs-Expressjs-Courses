const { readFileSync, writeFileSync } = require("fs");
const input = readFileSync("./input.txt", "utf8");
writeFileSync("./output.txt", `Here is the result: ${input}`, { flag: "w" });
//flag: "a" appends the content to the file instead of overwriting it
//flag: "w" overwrites the file
//flag: "r" reads the file
//the default flag is "w"
console.log(input);
