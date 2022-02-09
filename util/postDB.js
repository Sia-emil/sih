/*
  MongoDB utility script
  Contains Schema for Posts .
  Exports Posts model .
*/

//require mongoose
const mongoose = require('mongoose');
mongoose.set("useCreateIndex", true);
//connect to mongoose
mongoose.connect("mongodb://localhost:27017/posts", {useNewUrlParser : true});

//post schema
const postSchema = new mongoose.Schema({
    googleID : String,
    photoURL : String,
    title : {
        type: String,
        required : true
    },

    metaTag : {
        type: String,
        required : true
    },

    content : {
        type: String,
        required : true
    }
});

//post model
const Post = mongoose.model("Posts", postSchema);

//export post

exports.postSchema = postSchema;
