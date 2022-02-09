/*
  Router utility for serving authentication pages
  exports router
*/


//require modules
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const _ = require('lodash');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');




const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  name: 'session-id',
  secret: '12345-67890-09876-54321',
 saveUninitialized: false,
 resave: false,
 
}));
//require router
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/register', (req, res) => {
  res.render('register');
})
/*
 routes for serving pages
*/


module.exports = router;