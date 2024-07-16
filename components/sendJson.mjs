const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json');
    
    const responseBody = JSON.stringify({ location: "Mars" });
    
    res.setHeader('Content-Length', Buffer.byteLength(responseBody));
    
    res.end(responseBody);
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});