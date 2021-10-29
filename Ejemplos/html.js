const http = require("http");
const fs = require("fs").promises;
const host = 'localhost';
const port = 3007;

const requestListener = function(req, res){
	fs.readFile(__dirname + "/index.html")    	 //readFile  constante reservada de js que obtiene el archivo index.html desde el mismo directorio
		.then(contents =>{
			res.setHeader("Content-Type", "text/html");
			res.writeHead(200); //OK
			res.end(contents);
		})
		.catch(err =>{
			res.writeHead(500); //KO
			res.end(err);
			return;
		});
};





const server = http.createServer(requestListener);
	server.listen(port, host, ()=>{
	console.log(`Server is running om ${port}`);
});



