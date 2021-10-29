const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(`${first}\n${second}`);

//flag a to append
writeFileSync(
  "./content/sync-result.txt",
  `the result is ${first}, ${second}`,
  {
    flag: "a",
  }
);
