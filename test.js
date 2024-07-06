const http = require('http');
const assert = require('assert');

describe('HTTP Server Test', () => {
  const hostname = 'localhost'; // Define the hostname
  const port = 3000;            // Define the port

  it('should return Hello, World!', (done) => {
    http.get(`http://${hostname}:${port}/`, (res) => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        assert.strictEqual(data, 'Hello, World!');
        done();
      });
    });
  });
});
