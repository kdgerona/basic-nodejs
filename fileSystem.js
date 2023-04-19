const { mkdir, unlink, writeFile } = require('fs');

// * Create Directory
mkdir(`${__dirname}/source`, (error) => {
  if (error) {
    console.error('Create directory failed', error);
    return;
  }

  // * Create file
  writeFile(`${__dirname}/source/test.txt`, 'Hello World!', (err) => {
    if (err) {
      console.error('Create file failed', err);
      return;
    }

    console.log('Created a file successful');
  });

  console.log('Create directory successful');
});

// * Create Directory
mkdir(`${__dirname}/output`, (error) => {
  if (error) {
    console.error('Create output directory failed', error);
    return;
  }

  console.log('Create output directory successful');
});

// * Delete File
// unlink(`${__dirname}/source/test.txt`, (error) => {
//   if (error) {
//     console.error('Delete file failed', error);
//     return;
//   }

//   console.log('Delete a file successful');
// });
