const mongoose = require("mongoose"); 

const UserSchema = new mongoose.Schema({
    
    userName:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }

},{timestamps:true})
const user = mongoose.model('user',UserSchema)
module.exports =  user