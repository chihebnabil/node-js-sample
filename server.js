var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})



// var io = require("socket.io").listen(httpServer)
//
//
// io.sockets.on("connection",function (socket) {
//
//   console.log("nouveau user");
//
//     socket.on("login",function (me) {
//
//
//
//       console.log(me);
//       console.log('---------------------------');
//
//
//
//     socket.emit('logged')
//
//   })
// })
