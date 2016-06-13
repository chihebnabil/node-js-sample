var http = require('http');
var fs = require('fs');

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Chargement de socket.io
var io = require('socket.io').listen(server);

// Quand un client se connecte, on le note dans la console
io.on('connection', function (socket) {
  

  socket.on('test', function (data) {
    console.log(data);
  });
   socket.on('login', function (data) {
    console.log(data);
  });



});



server.listen(5000);
