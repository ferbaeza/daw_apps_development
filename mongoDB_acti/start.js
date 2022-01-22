const express = require('express');
const app = express();
const path = require('path');
const mongoose= require('mongoose');
const methodOverride= require('method-override');
const port = 3000;
const Notes = require('./models/notes');


mongoose.connect('mongodb://127.0.0.1:27017/fbh', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>{
    console.log("Mongo Connected");
  })
  .catch(()=>{
    console.log("Mongo KKOO");
    console.log(err);
  })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

const group= ['DAW', 'FCT'];
const category = ['Backend', 'Frontend'];

app.get('/', async(req,res)=>{
  const { gr }= req.query;
  if (gr) {
    const notes = await Notes.find({});
    res.render('notes', { notes })
  }else {
    const notes = await Notes.find();
    res.render('notes', { notes })
  }
})

app.get('/new/note', (req,res)=>{
  res.render('newNote', { group, category });
})

app.post('/notes', async(req, res)=>{
  const newNote = new Notes(req,res);
  await newNote.save();
  res.redirect('/');
})





app.listen(port, ()=>{
  console.log("App listen on port"+port);
})