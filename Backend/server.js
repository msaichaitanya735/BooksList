const express = require('express')
const mongoose = require('mongoose')
const routes = require("./router")

const app=express()
const port = 3000;

mongoose.connect("mongodb://localhost:27017/books",{
    useNewUrlParser:"true"
})

mongoose.connection.on("error",err=>{
    console.log("err",err)
})
mongoose.connection.on("connected",(err,res)=>{
    console.log("mongoose is connected")
})

app.use('/',routes)

app.listen(port,()=>{
    console.log('app is running on port:',port)
})