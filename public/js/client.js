var socket = io.connect("http://socketio-nodejs.herokuapp.com:8080")
$('#login_form').submit(function (event) {
  event.preventDefault()
  console.log("submit");
  socket.emit("login",{username : $('#username').val() })

})
socket.on('logged',function () {
   $('#login_form').fadeOut()
})
