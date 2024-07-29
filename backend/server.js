
const express = require('express')
const app = express()
const {connectToDb,getDb} =require('./models/user')
const PORT = process.env.PORT || 3500
const {MongoClient} = require('mongodb')
const mongoose = require('mongoose')

const host= 'http://127.0.0.1'+PORT


//db connection

let db

app.listen(PORT,()=>{
    console.log('app listening on port',PORT)
})


const connectDb = async () => {
    try {
      await mongoose.connect('mongodb+srv://laxitasingh2112:hibo12345@cluster0.ratpguf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1);
    }
  };
  
  connectDb();

connectDb()
mongoose.connection.once('open',()=>{
    console.log('connected to db')
})




app.get('/Recipe',(req,res)=>{
    res.send('HIIII');
   
})
