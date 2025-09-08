const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Only serve the file at "/"
  if (req.url === '/') {
    const fileStream = fs.createReadStream('./content/big.txt', { encoding: 'utf8' });

    // Handle errors
    fileStream.on('error', (err) => {
      res.statusCode = 500;
      res.end('Server Error: ' + err.message);
    });

    // Stream the file directly to response
    fileStream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(5000, () => {
  console.log('✅ Server running at http://localhost:5000');
});
