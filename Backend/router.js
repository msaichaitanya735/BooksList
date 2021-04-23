const express= require("express")
const Model= require('./model')
const router = express.Router()

router.get("/hello",(req,res)=>{
    res.send("hello world")
})
function middle(req,res,next){
    console.log('hello')
    next()
  }

router.get('/mware',middle,(req,res)=>{
    res.send('main')
})


router.get('/getbooks',async(req,res)=>{
    const model =await Model.find()
    res.send(model)
})

module.exports=router   