const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const blogSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true});


// timestamps:true will create a timestamp for each blog

// now we need to create a model based on the schema
// model is a wrapper around the schema which provides us with an interface to communicate with the database

const Blog=mongoose.model('Blog',blogSchema);
module.exports=Blog;

// now we can use this model to create a new blog




// generate a timestamp for each blog by self