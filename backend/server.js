
// const express = require('express')
// const app = express()
// const cors = require('cors');
// const {connectToDb,getDb} =require('./models/user')
// const PORT = process.env.PORT || 3000
// const {MongoClient} = require('mongodb')
// const mongoose = require('mongoose')

// const host= 'http://127.0.0.1'+PORT


// const corsOptions ={
//   origin : 'http://localhost:5173',
//   credentials : true
// }
// app.use(cors(corsOptions));

// app.listen(PORT,()=>{
//     console.log('app listening on port',PORT)
// })


// const uri = "mongodb+srv://laxitasingh2112:hibo12345@cluster0.ratpguf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri);
// const db = client.db('Recipe')
// console.log('dddd', db)
// client.on('connect', () => {
//   console.log('MongoDB client connected');
// });

// client.on('error', (error) => {
//   console.error('MongoDB client error:', error);
// });
// async function run() {
//   try {
    
//     // Get the database and collection on which to run the operation
//     const database = client.db("Recipe");
//     const movies = database.collection("recipes");
//     const query = { name: "Pudina & Dhania Chutney" };
//     const movie = await movies.findOne(query);
//     const documents = await movies.find({}).toArray();
//     console.log('Found documents:', documents);
//     // console.log(movie);
//     return documents
//     // return movie
//   } catch(err){
//     console.log(err)
//   }
// }





// app.get('/collections', async (req, res) => {
//   try {
//     const user = await run();
//     res.json(user);
//   } catch (error) {
//     console.log('here its', error)
//     res.status(500).send('Error fetching collections: ' + error);
//   }
// });

// app.get('/Recipe',(req,res)=>{
//     res.send('HIIII');
   
// })

// server.js
const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('/home/laxita/Recipes/backend/database/db.js'); // Import the connectToDatabase function
const setupRoutes = require('/home/laxita/Recipes/backend/routes/routes.js'); // Import the setupRoutes function
const setR=require('/home/laxita/Recipes/backend/models/user.js')
const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Start the server
app.listen(PORT, async () => {
  console.log('App listening on port', PORT);
  
  try {
    await connectToDatabase(); // Connect to MongoDB when starting the server
    setupRoutes(app); // Set up the routes after the database connection
    setR(app)

  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Exit the process if the connection fails
  }
});
