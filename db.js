const mongoose=require("mongoose");

var mongourl="mongodb+srv://ajj:arjunpr@cluster0.xudfs.mongodb.net/Pizza-place"

mongoose.connect(mongourl,{useunifiedTopology:true,useNewUrlParser:true})

var db=mongoose.connection
db.on('connected',()=>{
    console.log('successfull')
})
db.on('error',()=>{
    console.log('Failed')
})
module.exports=mongoose