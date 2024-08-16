const { readFile, writeFile } = require("fs");

const input = readFile("./input.txt", (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result.toString());
});
