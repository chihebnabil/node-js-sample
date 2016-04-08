var http = require("http")
var users;
var user = {};
var port = process.env.PORT || 8080;
httpServer = http.createServer(function (req,res) {

  console.log("Serveur Demmaré");


})
httpServer.listen(port)
var io = require("socket.io").listen(httpServer)


io.sockets.on("connection",function (socket) {

  console.log("nouveau user");

    socket.on("login",function (me) {



      console.log(me);
      console.log('---------------------------');



    socket.emit('logged')

  })
})
