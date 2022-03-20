const express = require('express')

const Pizza =require('./models/Pizzamodel')

const app = express();
const db=require("./db")
app.use(express.json());

app.get('/', (req, res) =>{ res.send('Hello World!')}) ;

app.get("/getpizzas",(req,res)=>{
    Pizza.find({},(err,docs)=>{
if(err){
    console.log(err);
}
else{
    res.send(docs)
}
    })
})

const port =process.env.PORT || 5000;
app.listen(port, () => `Example app listening on port !`);