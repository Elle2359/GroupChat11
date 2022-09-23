exports.getUser = (req,response,next)=>{
    const loggedInUser = req.user.name;
   let loggeduser = [];
  
   User.findOne({where:{id:req.user.id}})
   .then(user=>{
    
        loggeduser.push(user.name)
    
      
       return response.status(200).json({listOfUser:loggeduser});
   })
   .catch(err=>{
       return response.status(402).json({message:"Wrong path", success:false})
   })
}