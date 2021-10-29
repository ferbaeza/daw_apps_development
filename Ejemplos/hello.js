
const http = require("http");
const host = 'localhost';
const port = 3001;
const port3 = 3003;
const port2 = 3002;
const port4 = 3004;
const port5 = 3005;
const port6 = 3006;

const requestListener = function(req, res){
	res.writeHead(200); //Status Code Ok
	res.end("<h1>My first server!</h1>");
};

const requestListener2 = function(req, res){
	res.setHeader("content-type" , "text/html"); //Status Code Ok
	res.writeHead(200);
	res.end("<center><h1>M2_server!</h1></center>");
};

const requestListener3 = function(req, res){
	res.setHeader("content-type" , "aplication/json");
	res.end(`{"name":"Leo", "Surname":"Messi", "Edad":34}`);

};


const requestListener4 = function(req, res){
	res.setHeader("content-type" , "text/csv"); //Status Code Ok
	res.setHeader("Content-Disposition", "attachment:filename=fer.csv");
	res.writeHead(200);
	res.end(`id,name,email\n1,Fernando Baeza, baezeta@gmail.com`);
};

const requestListener5 = function(req, res){
	res.setHeader("content-type" , "text/pdf"); //Status Code Ok
	res.setHeader("Content-Disposition", "attachment:filename=fer.pdf");
	res.writeHead(200);
	res.end(`id,name,email\n1,Fernando Baeza, baezeta@gmail.com`);
}

const requestListener6 = function(req, res){
	res.setHeader("content-type" , "text/csv"); //Status Code Ok
	res.setHeader("Content-Disposition", "attachment:filename=fer.csv");
	res.writeHead(200);
	res.end(`id,name,email\n1,Fernando Baeza, baezeta@gmail.com`);
}



const server = http.createServer(requestListener);
	server.listen(port, host, ()=> {
	console.log(`Server is now running on${port}`);

});



const server2 = http.createServer(requestListener2);
	server2.listen(port2, host, ()=> {
	console.log(`Server is now running on${port2}`);
});



const server3 = http.createServer(requestListener3);
	server3.listen(port3, host, ()=> {
	console.log(`Server is now running on${port3}`);	
});



const server4 = http.createServer(requestListener4);
	server4.listen(port4, host, ()=> {
	console.log(`Server is now running on${port4}`);
});


const server5 = http.createServer(requestListener5);
	server5.listen(port5, host, ()=> {
	console.log(`Server is now running on${port5}`);
});
