const express = require ('express');
const app = express();
const port = 5001;

app.get('/', (req,res) =>{
    res.send("Hello Fer");
});




app.listen(port, ()=>{
    console.log("Listenning on port"+ port);
})