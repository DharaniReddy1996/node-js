const http = require('http');
const server = http.createServer();
server.on('connection' ,function (socket){
console.log(socket);
})
server.listen(3000);
console.log('node server started on port 3000')