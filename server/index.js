const express = require('express')
const color = require('colors');
const connect = require("./database/db")
const redis = require('redis');
const app = express();
const port = 8000;
connect();
const redisClient = redis.createClient();
redisClient.connect();
redisClient.on("connect",(err)=>{
    if(err){
        console.log("redis Not connected",err)
    }else{
        console.log("connected to Redis")
    }
})
app.get("/",async(req,res)=>{

    let keyname = "userDetails"
    let getCacheData = await redisClient.get(keyname);
    let result = {
        id:15,
        user:"from redis",
    }
    if(getCacheData){
        console.log(getCacheData);
    }else{
        await redisClient.set(keyname,JSON.stringify(result));
    }


    res.status(200).json()
})





app.listen(port,()=>{console.log(`server is up at ${port}`.rainbow)})
