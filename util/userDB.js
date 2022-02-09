/*
  MongoDB utility script
  Contains Schema for Users .
  Exports Users model .
*/

//require mongoose
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose'); 
//connect to mongoose
mongoose.connect("mongodb://localhost:27017/temp", {useNewUrlParser : true});

//user schema
const userSchema = new mongoose.Schema({
      firstname:  String,  
        lastname:  String,  
        email:  String,
        googleId : String,
        photoURL : String,
});


//user model (collection)
userSchema.plugin(passportLocalMongoose);  

const User = mongoose.model("Users", userSchema);

//export user model

exports = User;

