const mongoose = require('mongoose');
const url = "mongodb+srv://pavan1010:pavan1010@taskmanager.qjb1owe.mongodb.net/?retryWrites=true&w=majority"
async function connect(){
    await mongoose.connect(url).then(()=>{
        console.log("connected to mongodb".yellow)
    }).catch(err=>{
        console.log(err.bgRed)
    })
}

module.exports = connect;
