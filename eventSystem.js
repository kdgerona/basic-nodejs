const Emitter = require('node:events');

const emitter = new Emitter();

// * Listeners
emitter.on('test', (payload) => {
  console.log('payload:', payload);
});

setInterval(() => {
  // * Emitters
  emitter.emit('test', {
    message: 'Hello World!',
  });
}, 1000);
