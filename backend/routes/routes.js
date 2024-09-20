// routes.js
const { getDb } = require('/home/laxita/Recipes/backend/database/db.js'); // Import the getDb function from db.js

// Define a function to set up routes, receiving the app instance
function setupRoutes(app) {
  // Route to fetch all documents from the "recipes" collection
  app.get('/collections', async (req, res) => {
    try {
      const db = getDb();
      const recipesCollection = db.collection('recipes');
      const documents = await recipesCollection.find({}).toArray();
      console.log('Found documents:', documents);
      res.json(documents);
    } catch (error) {
      console.log('Error fetching collections:', error);
      res.status(500).send('Error fetching collections: ' + error);
    }
  });

  // Another simple route for demonstration
  app.get('/Recipe', (req, res) => {
    res.send('HIIII');
  });
}

module.exports = setupRoutes;
