const express = require('express');
const route = express.Router();
const {createProperty,UpdateProperty,getOneProperty, getAllProperty,deleteProperty} = require("../controllers/propertyController");
route.post("/createProperty",createProperty);
route.put("/updateProperty/:id",UpdateProperty);
route.get("/getOneProperty/:id",getOneProperty);
route.delete("/deleteProperty/:id",deleteProperty);
route.get("/getAllProperty",getAllProperty);
module.exports = route;