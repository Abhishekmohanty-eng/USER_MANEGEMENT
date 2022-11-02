const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/user_management_system")

const express=require("express")
const app=express()
// for user route
const userRoutes=require("./routes/userRoute")

app.use('/',userRoutes)
app.listen(3000,function(){
  console.log("server start....")
})