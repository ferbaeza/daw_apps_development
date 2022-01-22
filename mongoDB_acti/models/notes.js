const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        Type:String,
        required:false
    },
    group:{
        type:String,
        required:true,
        enum:['DAW', 'FCT']
    },
    category:{
        type:String,
        required:true,
        enum:['Backend', 'Frontend']
    }
})
const Notes = mongoose.model('Notes', notesSchema);
module.exports = Notes ;