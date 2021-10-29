const http = require("http");
const host   = 'localhost';
const port = 3008;

const books = JSON.stringify([
	{ title: "The Alchemist", author: "Paulo Cohelo", year: 1998},
	{ title: "The Prophet", author: "Kahlil Gibramo", year: 1996},
	{ title: "La Biblia", author: "Julia Navarro", year: 1999},
	{ title: "The Alchemist", author: "Juan Gomez Jurado", year: 2008}
]);

const authors = JSON.stringify([
	{ name: "Paulo Coelho", country: "Paulo Cohelo", yearOfBirth: 1968},
	{ name: "Kahlil Gobrano", country: "Kahlil Gibramo", yearOfBirth: 1966},
	{ name: "Julia Navarro", country: "Julia Navarro", yearOfBirth: 1989},
	{ namee: "Juan Gomez Jurado", country: "Juan Gomez Jurado", yearOfBirth: 1988}
]);




const requestListener= function(req, res){
	res.setHeader("Content-Type", "application/json");
	switch(req.url){
		case"/books":
			res.writeHead(200);
			res.end(books);
			break;
		case "/authors":
			res.writeHead(200);
			res.end(authors);
			break;
		default:
			res.writeHead(404);
			res.end(JSON.stringify({error:"Page Not found"}));
	}
};

const server = http.createServer(requestListener);
	server.listen(port, host, ()=> {
	console.log(`Server is running on port ${port}`);
});
