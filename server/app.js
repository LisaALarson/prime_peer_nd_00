var http = require('http');
var message = require('./export');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write(message());
    response.end();
}).listen(4000);

console.log("listening on port 4000");
