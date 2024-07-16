const http = require('http');


const server = http.createServer((req, res) => {
 
  res.statusCode = 200;
  
  
  res.setHeader('Content-Type', 'text/html');
  
  
  const message = '<html><body><h1>Hello, World! This is my custom message!</h1></body></html>';
  res.end(message);
});


server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});