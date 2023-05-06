const { UserModel } = require("../Modelss/user.model")

const express = require("express");

const userRoute = express.Router();

userRoute.get("/", async (req, res) => {
    const data = await UserModel.find()
    res.json(data)
    console.log("all data")
})


userRoute.post("/", async (req, res) => {
    const {name,  title, description, date}=req.body
    let p=new Date()

    let data=await UserModel.insertMany({name,title,description,date:p})
    console.log("data posted successfully") 
    res.json(data)
})

userRoute.patch("/:id", async (req, res) => {
    const {name,  title, description, date}=req.body
    let p=new Date()

    let data=await UserModel.findByIdAndUpdate({_id:req.params.id},req.body)
    console.log("data edited successfully") 
    res.json({"msg":"data edited",id:data._id})
    
})

userRoute.delete("/:id", async (req, res) => {
   
    let data=await UserModel.findByIdAndDelete({_id:req.params.id})
    console.log("data deleted successfully") 
    res.json({"msg":"data deleted",id:data._id})
    
})

module.exports = { userRoute }