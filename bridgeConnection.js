const net = require('net');
const { PORT = 3000 } = process.env ?? {};

const server = net.createServer();

server.on('connection', (socket) => {
  console.log('New connection');

  const httpServer = net.createConnection(4000);

  socket.pipe(httpServer);
  httpServer.pipe(socket);
});

server.listen(+PORT, () => {
  console.log(`Net Server running, listening from port ${PORT}`);
});
