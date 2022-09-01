var express = require('express');
var router = express.Router();
var registerModel = require('../models/register')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
});



// sendDataToMongoDB

router.post('/sendData' , function(req,res,next){
    let registers = new registerModel({
        name:req.body.name,
        surname:req.body.surname,
        email:req.body.email,
        password:req.body.password

    });
    registers.save(()=>{
        res.redirect('/register')
    })
})

module.exports = router;
