const http = require("http");

const server = http.createServer(function(rs,req){
  res.writeHead(200,{'Content-type':'text/plain'});

  res.end("Just works");

})

server.listen(4000,'127.0.0.1');

console.log("i worked")