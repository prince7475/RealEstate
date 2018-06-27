const express = require('express')
const volleyball = require('volleyball')
const path = require('path')
const app = express()
const port = 7475;


app.get('/',(req,res,next)=>{
  res.send("hey")
})


app.use(volleyball)

app.listen(port,()=>{
  console.log(`listing to port : ${port}`)
})
