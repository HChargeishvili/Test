const { readFile, writeFile } = require("fs");

console.log("Start");
readFile("./Content/First.txt", "utf8", (error, result) => {
 if (error) {
  console.log(error);
  return;
 }
 const First = result;
 readFile("./Content/Second.txt", "utf8", (error, result) => {
  if (error) {
   console.log(error);
   return;
  }
  const Second = result;
  writeFile(
   "./Content/Forth.txt",
   `The result = ${First}, ${Second}`,
   (error, result) => {
    if (error) {
     console.log(error);
     return;
    }
    console.log(`Finished doing this task!`);
   }
  );
 });
});
console.log(`Starting the next task!`);