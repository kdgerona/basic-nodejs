const net = require('net');
const { PORT = 3000 } = process.env ?? {};

const server = net.createServer();

server.on('connection', (socket) => {
  console.log('New connection');

  socket.on('data', (data) => {
    console.log('DATA', data.toString());
  });

  socket.on('close', () => {
    console.log('Connection closed');
  });
});

server.listen(+PORT, () => {
  console.log(`Net Server running, listening from port ${PORT}`);
});
