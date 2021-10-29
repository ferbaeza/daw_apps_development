const express = require('express');
const path = require('path');
const app = express();
const port = 5001;
const jsonDoc = require('./json/films.json');

app.use(express.static(path.join(__dirname, "/public")));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

app.get('/',(req,res) =>{
    res.render('search');
});

app.get('/films', (req,res) =>{
    //conts q = req.query.q;  //Solo cogemos un valor de la query
    const {q} = req.query;  // Asi podemos pasar varios parametros de query
    const film = jsonDoc[q];
    if (film){
        res.render('films', {...film});
    }else{
        const error = "The Film "+q+" is not found";
        res.render('error',{error});
    }
});

app.listen(port,()=>{
    console.log("listen on port number"+port);
});