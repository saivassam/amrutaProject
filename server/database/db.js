const mongoose = require('mongoose');
//this is url of Amruta's project in mongdb database 
async function connect(){
    await mongoose.connect("mongodb+srv://pavan1010:pavan1010@database1.vkiormi.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log("connected to mongodb")
    }).catch(err=>{
        console.log(err)
    })
}

module.exports = connect
