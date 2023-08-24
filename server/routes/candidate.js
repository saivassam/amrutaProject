const express = require('express');
const route = express.Router();
const verifyToken = require("../authMiddleware/authMiddleware")
const {createCandidate,updateCandidate,deleteCandidate,getCandidate,getAllCandidate} = require("../controllers/candidateController")

route.post("/candidateCreate",verifyToken,createCandidate);
route.put("/candidateUpdate/:id",updateCandidate);
route.delete("/deleteCandidate/:id",deleteCandidate);
route.get("/getCandidate/:id",getCandidate);
route.get("/getAllCandidate",getAllCandidate);


module.exports = route;