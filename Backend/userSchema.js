const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:String,
    mobile:Number,
    id:String,
    pass:String
})

module.exports=mongoose.model('userData',userSchema)