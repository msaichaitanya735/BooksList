const express = require('express')
const mongoose = require('mongoose')
const routes = require("./router")
const cors = require('cors')


const app=express()
app.use(express.json()) 

app.use(cors())

const port = 5000;

mongoose.connect("mongodb://chaitanya:Asdf1234@cluster0-shard-00-00.k9vqf.mongodb.net:27017,cluster0-shard-00-01.k9vqf.mongodb.net:27017,cluster0-shard-00-02.k9vqf.mongodb.net:27017/books?ssl=true&replicaSet=atlas-s1nffy-shard-0&authSource=admin&retryWrites=true&w=majority",{
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