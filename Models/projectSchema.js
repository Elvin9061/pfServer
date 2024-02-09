// import mongoose
const mongoose = require('mongoose');

// create a schema: use Schema class in mongoose module

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    language:{
        type:String,
        require:true
    },
    github:{
        type:String,
        require:true
    },
    overview:{
        type:String,
        require:true
    },
    projectImage:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }

})

const projects = mongoose.model("projects",projectSchema);
module.export = projects