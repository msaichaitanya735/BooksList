const express= require("express")
const Model= require('./model')
const router = express.Router()

router.get("/hello",(req,res)=>{
    res.send("hello world")
})

router.get('/getbooks',async(req,res)=>{
    const model =await Model.find()
    res.send(model)
})

module.exports=router   