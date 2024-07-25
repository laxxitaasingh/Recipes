require('dotenv').config()
const express = require('express')
const app = express()

const mongoose = require('mongoose')
const PORT = process.env.PORT || 3500

console.log(process.env.NODE_ENV)

app.listen(PORT,()=>{
    console.log('app listening on port',PORT)
})


app.get('/Recipes',(req,res)=>{
    res.json({mssg:"Welcome to the api"})
})



