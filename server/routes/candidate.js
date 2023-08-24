const express = require('express');
const route = express.Router();
const {createCandidate,updateCandidate,deleteCandidate,getCandidate,getAllCandidate} = require("../controllers/candidateController")

route.post("/candidateCreate",createCandidate);
route.put("/candidateUpdate/:id",updateCandidate);
route.delete("/deleteCandidate/:id",deleteCandidate);
route.get("/getCandidate/:id",getCandidate);
route.get("/getAllCandidate",getAllCandidate);


module.exports = route;