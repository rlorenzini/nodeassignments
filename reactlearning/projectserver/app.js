const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  port = 8080;

var cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

const http = require('http');

const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
