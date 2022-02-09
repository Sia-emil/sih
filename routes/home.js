/*
  Router utility for serving blog pages
  exports router
*/


//require express
const express = require("express");

//require router
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})

/*
 routes for serving pages
*/


module.exports = router;