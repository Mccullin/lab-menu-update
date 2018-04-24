var express = require('express');
var server = express();
server.listen(8000);
console.log("server is running at port 8000")
server.get('/', function(req, res){
  res.send('Hello from Express');
});

server.get('/menu', function(req, res){
  res.json({name:"Works", price:9.99});
});

server.get('/google', function(req, res){
  res.redirect(301, 'http://www.google.com');
});

//handle files:
//static folder: give the access: "read" to everyone
//download "read" to everyone
//upload "a separate folder, " everyone can write"