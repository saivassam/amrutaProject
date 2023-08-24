const Candidate = require("../modal/CandidateModel/candidateModel");


const createCandidate = async(req,res)=>{
    try{

        const isCandidate = await Candidate.findOne({email:req.body.email})
        if(isCandidate){
            return res.status(400).json({
                message:"Candidate already available with this email"
            })
        }

        const isMobile1 = await Candidate.findOne({mobileNo1:req.body.mobileNo1})
        if(isMobile1){
            return res.status(400).json({
                message:"Candidate already available with this email"
            })
        }

        if(req.body.mobileNo2){
            const isMobile2 = await Candidate.findOne({mobileNo2:req.body.mobileNo2})
            if(isMobile2){
                return res.status(400).json({
                    message:"Candidate already available with this email"
                })
            }
        }

        const {fullName,email,mobileNo1,mobileNo2,permanentAddress,temporaryAddress,guardianName,guardianRelation,maritalStatus,joiningDate,profession,collegeOrWorkPlace,idProof,idProofFile,AllocatedRoom} = req.body;
        const data = await new Candidate({
            fullName,
            email,
            mobileNo1,
            mobileNo2,
            permanentAddress,
            temporaryAddress,
            guardianName,
            guardianRelation,
            maritalStatus,
            joiningDate,
            profession,
            collegeOrWorkPlace,
            idProof,
            idProofFile,
            AllocatedRoom
        })

        await data.save();

        res.status(201).json({
            message:"Candidate Created SuccessFully",
            data
        })


    }catch(err){
        res.status(400).json({
            success:true,
            message:err.message
        })
    }
}

const updateCandidate = async(req,res)=>{
    try{

        const data = await Candidate.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})


        res.status(201).json({
            message:"Candidate updated SuccessFully",
            data
        })


    }catch(err){
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

const deleteCandidate = async(req,res)=>{
    try{

        const data = await Candidate.findByIdAndDelete(req.params.id)


        res.status(201).json({
            message:"Candidate deleted SuccessFully"
        })


    }catch(err){
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

const getCandidate = async(req,res)=>{
    try{

        const data = await Candidate.findById(req.params.id)


        res.status(201).json({
            message:"Candidate found",
            data
        })


    }catch(err){
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

const getAllCandidate = async(req,res)=>{
    try{

        const data = await Candidate.find()


        res.status(201).json({
            message:"Candidate found",
            data
        })


    }catch(err){
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}


module.exports = {createCandidate,updateCandidate,deleteCandidate,getCandidate,getAllCandidate};
