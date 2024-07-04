const { readFileSync, writeFileSync } = require("fs");
console.log("Start");
const First = readFileSync("./Content/First.txt", "utf8");
const Second = readFileSync("./Content/Second.txt", "utf8");

writeFileSync("./Content/Third.txt", `The result = ${First}, ${Second}`, {
 flag: "a",
});
console.log("Done with this task!");
console.log("Starting the next one!");