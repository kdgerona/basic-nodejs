const http = require('http');
const { PORT = 4000 } = process.env ?? {};

const server = http.createServer((req, res) => {
  const { url } = req;
  console.log('url', url);
  res.end('Hello World! \n');
});

server.listen(+PORT, () => {
  console.log(`HTTP Server running, listening from port ${PORT}`);
});
