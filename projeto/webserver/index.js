const http = require("node:http");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hello World\n");
});

server.listen(port, () => console.log(`Webserver ouvindo na porta ${port}`));
