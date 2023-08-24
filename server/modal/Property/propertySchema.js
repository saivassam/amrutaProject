const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    propetyName:{
        type:String,
        require:true,
    },
    ownerName:{
        type:String
    },
    city:{
        type:String,
        require:true,
    },
    desc:{
        type:String
    },
    photos:{
        type:[String]
    },
    rooms:{
        type:[String],
    },
    price:{
        type:Number
    },
    Adddress:{
        type:String
    }
})
const Property = mongoose.model('property',propertySchema)
module.exports = Property