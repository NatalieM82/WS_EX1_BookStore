var books = require("./books");

var express = require("express");
var app = express();

// var http = require('http');
// http.createServer(function(req,res) {
	
// 			res.writeHead(200);
// 			res.end(JSON.stringify(booksList));
		
// }).listen(8080);

app.get('/getAllBooks', function(req,res){
	console.log("Getting all books");
	var details = books.getAllBooks();
	res.end(details);
});

app.get('/getBook/:id', function(req,res){
	console.log("Getting Book by Id: " + req.params.id);
	var details = books.getBook(req.params.id);
	res.end(details);
});

app.get('/getByType/:type', function(req,res){
	console.log("Getting Books by type: " + req.params.type);
	var details = books.getByType(req.params.type);
	res.end(details);
});

app.listen(8080);
console.log("Listening on port 8080");