var http = require("http")
var users;
var user = {};
var port = process.env.PORT || 8080;
httpServer = http.createServer(function (req,res) {

  res.end('loool')

  console.log("Serveur Demmaré");


})
httpServer.listen(port)
