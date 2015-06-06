
var booksList = [
{id:"1", name:"Harry Potter and the Philosopher's Stone", author:"J. K. Rowling", year:"1997", pages:"309", sales:"4,200,654$", cover:"http://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer's_Stone.jpg", spells:["Alohomora", "Accio"]},
{id:"2", name:"Harry Potter and the Chamber of Secrets", author:"J. K. Rowling", year:"1998", pages:"352", sales:"3,484,047$", cover:"http://upload.wikimedia.org/wikipedia/en/a/a7/Harry_Potter_and_the_Chamber_of_Secrets_(US_cover).jpg", spells:["Expelliarmus", "Imperio"]},
{id:"3", name:"Harry Potter and the Prisoner of Azkaban", author:"J. K. Rowling", year:"1999", pages:"448", sales:"3,377,906$", cover:"http://upload.wikimedia.org/wikipedia/en/b/b4/Harry_Potter_and_the_Prisoner_of_Azkaban_%28US_cover%29.jpg", spells:["Imperio", "Accio"]},
{id:"4", name:"Harry Potter and the Goblet of Fire", author:"J. K. Rowling", year:"2000", pages:"734", sales:"3,583,215$", cover:"http://upload.wikimedia.org/wikipedia/en/6/62/Harry_Potter_and_the_Goblet_of_Fire_%28US_cover%29.jpg", spells:["Nox", "Reparo"]},
{id:"5", name:"Harry Potter and the Order of the Phoenix", author:"J. K. Rowling", year:"2003", pages:"896", sales:"4,179,479$", cover:"http://upload.wikimedia.org/wikipedia/en/9/98/Harry_Potter_and_the_Order_of_the_Phoenix_%28US_cover%29.jpg", spells:["Riddikulus", "Wingardium Leviosa"]},
{id:"6", name:"Harry Potter and the Half-Blood Prince", author:"J. K. Rowling", year:"2005", pages:"652", sales:"2,950,264$", cover:"http://upload.wikimedia.org/wikipedia/en/f/f8/Harry_Potter_and_the_Half-Blood_Prince_%28US_cover%29.jpg", spells:["Lumos", "Accio"]},
{id:"7", name:"Harry Potter and the Deathly Hallows", author:"J. K. Rowling", year:"2007", pages:"784", sales:"4,475,152$", cover:"http://upload.wikimedia.org/wikipedia/en/0/02/Harry_Potter_and_the_Deathly_Hallows_%28US_cover%29.jpg", spells:["Imperio", "Riddikulus"]}
];

exports.getAllBooks = function () {
	return booksList;
}

exports.getBook = function (book_id) {
	console.log("Books array length: " + booksList.length);
	for (var i = 0; i < booksList.length; i++){
		//console.log(books[i].id);
		if(booksList[i].id == book_id){
			return booksList[i];
		}
	}
}

exports.getBySpell = function (spell_name) {
	console.log("Books array length: " + booksList.length);
	var newList = [];
	for (var i = 0; i < booksList.length; i++){
		if(booksList[i].spells[0] == spell_name){
			newList.push(booksList[i]);
		}
		if(booksList[i].spells[1] == spell_name){
			newList.push(booksList[i]);
		}
	}
	
	if(newList.length > 0){
		return newList;
	}
	else return("Couldn't find any books by your request");
}