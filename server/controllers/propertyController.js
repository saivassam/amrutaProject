const { json } = require("express")
const Property = require("../modal/Property/propertySchema")
const createProperty = async(req,res)=>{


    try{

        const data = await new Property(req.body)
        await data.save()
        res.status(201).json({
            message:"Property Added successFully",
            data:data
        })

    }catch(err){
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

const UpdateProperty = async(req,res)=>{
    try{
        const data = await Property.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json({
            message : "PG chnages added  SuccessFully",
            data:data
        })

    }catch(err){
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

const deleteProperty = async(req,res)=>{
    try{
        
        await Property.findByIdAndDelete(req.params.id)
        res.status(200),json({
            success:true,
            message:"Property Deleted SuccessFully"
            })
    }catch(err){
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

const getOneProperty = async(req,res)=>{

    try{

        const data = await Property.findById(req.params.id)
        res.status(200).json({
            message:"Data Received Successfully",
            data:data
        })

    }catch(err){
        res.status(400).json({
            sucess:false,
            message:err.message
        })
    }
}

const getAllProperty = async(req,res)=>{

    try{

        const data = await Property.find()
        res.status(200).json({
            message:"Data Received Successfully",
            data:data
        })

    }catch(err){
        res.status(400).json({
            sucess:false,
            message:err.message
        })
    }
}

module.exports = {createProperty,UpdateProperty,getOneProperty,getAllProperty,deleteProperty};