const express= require("express")
const Model= require('./model')
const userSchema = require("./userSchema")
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
router.post('/registeruser',async(req,res)=>{
    const user = new userSchema({
        name:req.body.name,
        mobile:req.body.mobile,
        id:req.body.id,
        pass:req.body.pass,
    })
    await user.save()
    res.send(user)
})



module.exports=router   