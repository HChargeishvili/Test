const HTTP = require("http");
const Server = HTTP.createServer((req, res) => {
 if (req.url === "/") {
  res.end("Welcome to our Home page!");
 }
 if (req.url === "/about") {
  res.end("Welcome to our About page!");
 }
 res.end(`
  <h1>Warning!</h1>
  <p>Page that you are looking for doesn't exist.</p>
  <a href="/">Go back to Home page</a>`);
});

Server.listen(5000);
