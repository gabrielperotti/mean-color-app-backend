const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const initializeDatabase = require('./initializeDB');
const Color = require('./models/colors');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    initializeDatabase();
  })
  .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/colors', async (req, res) => {
  try {
    const colors = await Color.find({});
    res.json(colors);
  } catch (err) {
    res.status(500).json({ message: "Error fetching colors", error: err });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
