// npm - Global command, comes with code.
// npm --version

// local dependency - Use it only in this particular project.
// npm i <packageName>

// global dependency - Use it in any project.
// npm intall -g <packageName>
// sudo npm intall -g <packageName> (mac)

// package.json - Manifest file (stores important info about project/package)
// Manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const Lodash = require("lodash");
const Numbers = [1, [2, [3, [4, [5]]]]];
const NewNumbers = Lodash.flattenDeep(Numbers);

console.log(NewNumbers);