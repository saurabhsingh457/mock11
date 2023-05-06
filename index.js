const {connection}=require("./database/db")

const express=require("express");

const app=express();

const cors=require("cors");
app.use(cors({origin:"*"}))

app.use(express.json())
const {userRoute}=require("./Route/user.route")
app.use("/",userRoute)

app.get("/hello",(req,res)=>{
    res.send("welcome to trello board")
})

app.listen(3000,async()=>{
    try {
        await connection
        console.log("connection established")
    } catch (error) {
        console.log(error)
    }
    console.log("server listening on port 3000")
})