/* Although custom node code is single threaded the following code does not block */
setTimeout(() => {
    console.log('bye Node');
}, 2000);

setInterval(() => {
    console.log('bye Node');
}, 1000);

console.log('hello Node');

/* Web Server example */
const http = require('http');
const handle = require('./handle');
const expressServer = require('./express/handle');

const server = http.createServer(handle);

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});

/* express */
const server2 = http.createServer(expressServer);

server2.listen(3001, () => {
    console.log('Server listening on port 3001');
});
