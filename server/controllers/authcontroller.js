
const User = require("../modal/userModel/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async(req,res)=>{

    try{

        const isEmailAvailable = await User.findOne({email:req.body.email})

        if(isEmailAvailable){
            return res.status(400).json({
                message:"email already exist",
            })
        }
        const isPhoneAvailable = await User.findOne({phone:req.body.phone})

        if(isPhoneAvailable){
            return res.status(400).json({
                message:"phone Number already exist",
            })
        }

        const cryptPassword = bcrypt.hashSync(req.body.password,10)
        const {userName,email,phone,password,isAdmin} = req.body
        const data = await new User({
            userName,
            email,
            phone,
            password:cryptPassword,
            isAdmin
        })

        await data.save()

        res.status(201).json({
            message:"user created Successfully",
            data
        })

    }catch(err){

        res.status(400).json({
            success:false,
            message:err.message
        })

    }


}

const login = async(req,res)=>{

    try{

        const isUser = await User.findOne({email:req.body.email})
        if(!isUser){
            return res.status(400).json({
                message:"Invalid email Id"
            })
        }

        const isPassword = bcrypt.compare(req.body.password,isUser.password)
        if(!isPassword){
            return res.status(400).json({
                message:"Wrong Password"
            })
        }

        const {password,isAdmin,phone,...otherDetails} = isUser._doc;
        const token = jwt.sign({email:isUser.email,name:isUser.userName,isAdmin:isUser.isAdmin},"pavan",{expiresIn:"60s"})

        res.cookie("access_token",token,{
            httpOnly:true,
        }).status(200).json({
            message:"logged In SuccessFully",
            token:token,
            user:{...otherDetails}
        })


    }catch{
        res.status(400).json({
            success:false,
            message:err.message
        })
    }

}

module.exports = {register,login};