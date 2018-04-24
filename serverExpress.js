var express = require('express');
var server = express();
var path=require("path");
//
var publicPath=path.resolve(__dirname, "static")
server.use(express.static(publicPath))
//simplify the job to get the data from content of request
var bodyParser=require('body-parser')
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

 var MongoClient = require('mongodb').MongoClient;
 var db,menu;
 var dbURL="mongodb://pizza1:pizza1@localhost:27017/pizzadb";
 // Initialize connection once
 MongoClient.connect(dbURL, 
 					function(err, database) {
   if(err) throw err;

   db=database.db("pizzadb")
  
   // Start the application after the database connection is ready
   server.listen(8000);
   console.log("Listening on port 8000");
 });




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