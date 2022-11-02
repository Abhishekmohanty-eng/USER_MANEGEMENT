const express =require("express")

const user_route=express()

const UserControler=require('../controler/userController')

const bodyPaerser=require("body-parser")
user_route.use(bodyPaerser.json())
user_route.use(bodyPaerser.urlencoded({extended:true}))

const multer=require("multer")
const path =require('path')
const storage=multer.diskStorage({
  destination:function(req,file,cb){
  cb(null,path.join(__dirname,'../public/userimage'))
  },
  filename:function(req,file,cb){
  const name=Date.now()+'-'+file.originalname
  cb(null,name)
  }
})

const upload=multer({storage:storage})

user_route.set("view engine",'ejs')
user_route.set('views',"./views/users")



user_route.get("/register",UserControler.loadRegister)

user_route.post("/register",upload.single("image") ,UserControler.insertUser)
module.exports=user_route;

