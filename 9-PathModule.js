const Path = require("path");

console.log(Path.sep);

const FilePath = Path.join("/Content", "Subfolder", "Text.txt");
console.log(FilePath);

const Base = Path.basename(FilePath);
console.log(Base);

const Absolute = Path.resolve(__dirname, "Content", "Subfolder", "Text.txt");
console.log(Absolute);
