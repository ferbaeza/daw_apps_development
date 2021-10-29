const express = require("express");
const app = express();
const port = 3012;

//List of Request Listeners (GET and POST)
/*
app.use((req, res) => {
    console.log("WE GOT A NEW REQUEST");
    res.send("<h1>HELLO FRIEND!</h1>");
});*/

app.get('/', (req, res) => {
    res.send("<h1>HOME PAGE</h1>")
});

app.get('/books', (req, res) => {
    res.send("<h1 style='color:green;'>BOOKS PAGE</h1>")
});

app.get('/books/:bookname/:idBook', (req, res) => {
    const { bookname, idBook } = req.params;
    res.send("<p>Information of book '" + bookname + "' with ID: '" + idBook + "'</p>")
});

//Using Query Strings
app.get('/search', (req, res) => {
    const { q, atr } = req.query;
    res.send("Query String: " + q + " - " + atr);
    /*q --> BBDD
    BBDD --> JSON
    JSON --> HTML
    res.send(HTML)*/
});

app.get('/authors', (req, res) => {
    res.send("<h1 style='color:blue;'>AUTHORS PAGE</h1>")
});

//You need RESTClient in order to test this
app.post('/buy', (req, res) => {
    //DB operations
    res.send("POST REQUEST TO BUY A BOOK");
});

//In other case... default option
app.get('*', (req, res) => {
    res.send("<h1 style='color:red;'>ERROR!!</h1>")
});

//-------------------------------------------------------
//Create Server
app.listen(port, ()=>{
    console.log("LISTENING ON PORT " + port);
});