const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000; // You can change this to any available port

// Define an endpoint to read /tmp/secret.txt
app.get('/', (req, res) => {
  fs.readFile('/tmp/secret.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      return res.status(500).json({ error: `Error reading file: ${err.message}` });
    }
    // Return the contents of the file in the response
    res.status(200).json({ message: `Contents of /tmp/secret.txt:`, data });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
