const User=require('../models/user')
const Group=require('../models/group')
const userGroup = require('../models/userGroup')

exports.createGroup=(req,res)=>{

    const{grpName, isAdmin}=req.body
    
    req.user.createGroup({groupname:grpName}).then(result=>{
        
        userGroup.update({isAdmin: true},{where:{userId: req.user.id}})
        .then(response=>{
            //console.log(result)
            res.status(200).json("group added")
        })
        
    })
    .catch(err=>{
        console.error(err)
    })
}
exports.getGroups=(req,res)=>{
    console.log(req.user.id)
    req.user.getGroups()
    .then(groups=>{
        res.status(200).json({groups})
    }).catch(err=>console.log(err))
}

exports.getIsAdmin = (req, res, next)=>{
    //console.log(req.query.grpId)
    const groupId = req.query.grpId
    userGroup.findOne({where:{
        userId: req.user.id,
        groupId: groupId
    }})
    .then(user=>{
        //console.log(user)
        res.status(200).json({user})
    })
    .catch(err=>console.log(err))
    
}
exports.getUser = (req,response,next)=>{
    const loggedInUser = req.user.name;
   let allUser = [];
   // console.log(loggedInUser);
   User.findOne({where:{id:req.user.id}})
   .then(user=>{
    
        allUser.push(user.name)
    
      
       return response.status(200).json({listOfUser:allUser});
   })
   .catch(err=>{
       return response.status(402).json({message:"Wrong path", success:false})
   })
}