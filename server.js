const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./configuration/db');
const counterRoutes = require('./routes/counterRoutes');

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/counters', counterRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send('Route not found');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));