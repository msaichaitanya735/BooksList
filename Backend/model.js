const mongoose = require("mongoose")

const schema= mongoose.Schema({
    title: String,
    isbn: String,
    currency: String,
    discountUnits: String,
    longDescription: String,
    shortDescription: String,
    status:String,
    thumbnailUrl:String,
    publishedDate:Date,
    price:Number,
    pageCount:Number,
    discount:Number,
    authors:[
        String
    ],
    categories:[
        String
    ]  
})
module.exports=mongoose.model("bookdetails",schema)