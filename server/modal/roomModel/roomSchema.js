const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    type:{type:String},
    roomNumber:{type:Number,unique:true},
    roomMembers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'candidate'
    }]
})

const Room = mongoose.model("room",RoomSchema)
module.exports = Room;

