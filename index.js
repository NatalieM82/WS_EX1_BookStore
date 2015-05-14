var books = require("./books");

var express = require("express");
var app = express();

// var http = require('http');
// http.createServer(function(req,res) {
	
// 			res.writeHead(200);
// 			res.end(JSON.stringify(booksList));
		
// }).listen(8080);

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/getAllBooks', function(req,res){
	console.log("Getting all books");
	var details = books.getAllBooks();
	res.json(details);
});

app.get('/getBook/:id', function(req,res){
	console.log("Getting Book by Id: " + req.params.id);
	var details = books.getBook(req.params.id);
	res.json(details);
});

app.get('/getBySpell/:spell', function(req,res){
	console.log("Getting Books by type: " + req.params.spell);
	var details = books.getBySpell(req.params.spell);
	res.json(details);
});

app.listen(process.env.PORT || 8080);
console.log("Listening on port 8080");