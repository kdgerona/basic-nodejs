const { createReadStream, createWriteStream } = require('fs');

const fileReadStream = createReadStream('./source/test.txt');
const fileWriteStream = createWriteStream('./output/copy-test.txt');

fileReadStream.pipe(fileWriteStream);
