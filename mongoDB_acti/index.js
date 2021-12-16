const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose'); //Mongodb connector
const methodOverride = require('method-override')
const port = 3000;
const Player = require('./models/player');

mongoose.connect('mongodb://127.0.0.1:27017/fbh', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

//const positions = ["GK", "DF", "MF", "FW"];
const positions = ['GK','DF','MF','FW'];
//const teams = ["REAL MADRID", "FC BARCELONA", "PSG", "BAYER MUNICH", "BORUSSIA DORTMUND"];
const teams = ['REAL MADRID' , 'FC BARCELONA', 'PSG ', 'BAYER MUNINCH', 'BORUSSIA DORTMUND'];
//----------------------------------------------------
app.get('/players', async (req,res)=>{
    const { pos } = req.query;
    if (pos) {
        const players = await Player.find({ position:pos });
        res.render('index', { players })
    } else {
        const players = await Player.find();
        res.render('index', { players })
    }
    
})

app.get('/players/new', (req,res)=>{
    res.render('new', { positions, teams });
})

app.post('/players', async (req,res)=>{
    const newPlayer = new Player(req.body);
    await newPlayer.save();
    res.redirect("/players")
})

app.get('/players/:id', async(req,res) =>{
    const { id } = req.params;
    const player = await Player.findById(id);
    res.render('show', { player });
})

app.get('/players/:id/edit', async(req,res) =>{
    const { id } = req.params;
    const player = await Player.findById(id);
    res.render('edit', { player, positions, teams });
})

app.put('/players/:id', async(req,res) => {
    const { id } = req.params;
    const player = await Player.findByIdAndUpdate(id, req.body);
    res.redirect('/players');
})

app.delete('/players/:id', async(req,res)=>{
    const { id } = req.params;
    const player = await Player.findByIdAndDelete(id);
    res.redirect('/players');
})

//----------------------------------------------------
app.listen(port, () => {
    console.log("APP IS LISTENING ON PORT " + port)
})


