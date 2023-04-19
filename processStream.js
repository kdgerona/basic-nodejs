process.stdout.write('Type anything... \n');

process.stdin.on('data', (data) => {
  process.stdout.write(`Inputted Data: ${data.toString()} \n`);
});
