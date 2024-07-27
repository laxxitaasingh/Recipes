
const express = require('express')
const app = express()
const {connectToDb,getDb} =require('./models/user')
const PORT = process.env.PORT || 3500


//db connection

let db

connectToDb((err)=>{
    if(!err){
        app.listen(PORT,()=>{
            console.log('app listening on port',PORT)
        })
    }
    db = getDb()
})





app.get('/Recipe',(req,res)=>{
    db.collection('users')
    .find()
    .toArray()
    .then(users => {
        res.status(200).json({ mssg: "Welcome to the api", users });
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching the data" });
    });
})
