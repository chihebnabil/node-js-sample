var http = require('http');
var fs = require('fs');
// Chargement du fichier index.html affiché au client
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
//app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

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
