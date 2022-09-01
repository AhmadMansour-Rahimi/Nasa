var mongoose = require('mongoose');
var registerSchema = mongoose.Schema({

    name:{
        type:String
    },
    surname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:Number
    }
});

var registerModel = mongoose.model('Register' , registerSchema);
module.exports = registerModel