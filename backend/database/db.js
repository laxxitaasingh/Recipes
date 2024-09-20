// db.js
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://laxitasingh2112:hibo12345@cluster0.ratpguf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
let db;

// Function to connect to MongoDB
async function connectToDatabase() {
  try {
    await client.connect();
    db = client.db('Recipe');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

// Function to get the database instance
function getDb() {
  if (!db) {
    throw new Error('Database not initialized. Call connectToDatabase first.');
  }
  return db;
}

module.exports = {
  connectToDatabase,
  getDb,
};
