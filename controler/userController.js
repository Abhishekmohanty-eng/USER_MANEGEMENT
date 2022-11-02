const User=require('../models/userModel');
const bcrypt=require("bcrypt")
const  securePassword=async(password)=>{
try{
const passwordHash=await bcrypt.hash(password,10)
return passwordHash
}catch(err){
  console.log(err.message)
}
}
const loadRegister=async(req,res)=>{
  try{
    res.render("registration")
  }catch(err){
   console.log(err.message)
  }
}

const insertUser=async(req,res)=>{
  try{
  const spassword=await securePassword(req.body.password)
  const user=new User({
    name:req.body.name,
    email:req.body.email,
    mobile:req.body.mobile,
    image:req.file.filename,
    password:spassword,
    is_admin:0
  })
  const userdata =await user.save()
  if(userdata){
    res.render("registration",{message:"your registation is done check your email"})
  }else{
    res.render("registration",{message:"your registation is failled"})
  }


  }catch(err){
    console.log(err)
  }
}

module.exports={loadRegister,insertUser}