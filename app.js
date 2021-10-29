const { createServer } = require("http");

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello welcome to home page");
  } else if (req.url === "/about") {
    res.end("you now on about page");
  } else {
    res.end(`
    <h1>You are lost</h1>
    <p>click <a href = "/">back</a> to back home </p>
    `);
  }
});

server.listen("5000");
