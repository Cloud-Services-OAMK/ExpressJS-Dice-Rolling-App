if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`)
});
