const jwt = require("jsonwebtoken");
const verifyToken = (req,res,next)=>{
    const token  = req.cookies.access_token;
    if(!token){
        return res.status(502).json({
            message:"your are not authenticated"
        })
    }

    jwt.verify(token,"pavan",(err,user)=>{
        if(err){
            return res.status(403).json({
                message:"Token Invalid!"
            })
        }
        
        req.user = user;

        next();
    })
    }

    module.exports = verifyToken;
