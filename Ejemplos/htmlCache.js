const http = require("http");
const fs = require("fs").promises;
const host = 'localhost';
const port = 3009;

let indexFile;

const requestListener = function(req, res){
	res.setHeader("Content-Type", "text/html");
	res.writeHead(200);
	res.end(indexFile);
};

const server = http.createSever(requestListener);

	fs.readFile(__dirname + "/index.html")    	 //readFile  constante reservada de js que obtiene el archivo index.html desde el mismo directorio
		.then(contents =>{
			indexFile = contents;
			server.listen(port, host, ()=> {
				console.log(`Server is running on port ${port}`);
			});
		})
		.catch(err =>{
			console.error("Could not read the html file :");
			process.exit(1);
		});




