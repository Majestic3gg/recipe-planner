const express = require('express');
const connectDB = require('./db');
const recipeRoutes = require('./routes/recipes');
const mealPlanRoutes = require('./routes/mealPlans');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/recipes', recipeRoutes);
app.use('/api/mealplans', mealPlanRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});