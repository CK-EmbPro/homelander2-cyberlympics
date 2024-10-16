const fs = require('fs');

// Function to automatically read and display /tmp/secret.txt at startup
const autoReadSecret = () => {
  fs.readFile('./tmp/secret.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
    } else {
      // Echo the contents of the file
      console.log(`Contents of /tmp/secret.txt: \n${data}`);
    }

    // Close the shell after the file is read or error is handled
    console.log('Shell closed.');
    process.exit(0); // Exit the process after displaying the content
  });
};

// Automatically read /tmp/secret.txt at the start and close the shell
autoReadSecret();
