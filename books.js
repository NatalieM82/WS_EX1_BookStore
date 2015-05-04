
var booksList = [
{id:"1", name:"a", author:"aa", year:"2015", type:"Comedy", price:"11", rate:"1"},
{id:"2", name:"b", author:"bb", year:"2015", type:"Drama", price:"22", rate:"2"},
{id:"3", name:"c", author:"cc", year:"2015", type:"Drama", price:"33", rate:"3"},
{id:"4", name:"d", author:"dd", year:"2015", type:"Drama", price:"44", rate:"4"},
{id:"5", name:"e", author:"ee", year:"2015", type:"Comedy", price:"55", rate:"5"},
{id:"6", name:"f", author:"ff", year:"2015", type:"Comedy", price:"66", rate:"6"}
];

exports.getAllBooks = function () {
	return JSON.stringify(booksList);
}

exports.getBook = function (book_id) {
	console.log("Books array length: " + booksList.length);
	for (var i = 0; i < booksList.length; i++){
		//console.log(books[i].id);
		if(booksList[i].id == book_id){
			return JSON.stringify(booksList[i]);
		}
	}
}

exports.getByType = function (book_type) {
	console.log("Books array length: " + booksList.length);
	var newList = [];
	for (var i = 0; i < booksList.length; i++){
		//console.log(books[i].id);
		if(booksList[i].type == book_type){
			newList.push(booksList[i]);
		}
	}
	if(newList.length > 0){
		return JSON.stringify(newList);
	}
	else return("Couldn't find any books by your request");
}