const express = require('express');
const connectDB = require('./db.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes (to be added later)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});