const express = require('express')
const color = require('colors');
const mongoose = require('mongoose');
const UserRoute = require("./routes/userRoutes")
const AuthRoute = require("./routes/auth");
const PropertyRoute = require("./routes/property");
const RoomRoute = require("./routes/room");
const CandidateRoute = require("./routes/candidate");
const cookieParser  = require("cookie-parser");
const cors = require('cors');
const connect = require("./database/db")
const app = express();
const myApp = express();
const port = 8000;
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

////----------------EndPoints----------------////////////////

app.use("/auth",AuthRoute)
app.use("/user",UserRoute)
app.use("/property",PropertyRoute)
app.use("/room",RoomRoute)
app.use("/candidate",CandidateRoute)



app.listen(port,()=>{connect(),console.log(`server is up at ${port}`.rainbow)})