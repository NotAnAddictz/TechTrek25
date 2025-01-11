import { configDotenv } from 'dotenv';
// const express = require('express');
import express from 'express';
import loginRoutes from './routes/login.js';
import registerRoutes from './routes/register.js';
import tradeRoutes from './routes/trades.js'
const app = express();
// const companyRoutes = require('./routes/companyRoutes');
// const requestRoutes = require('./routes/requestRoutes');
// const loginRoutes = require('./routes/login');
// const registerRoutes = require('./routes/register');
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware for parsing JSON

// Routes
// app.use('/api/company', companyRoutes); 
// app.use('/api/request', requestRoutes); 
app.use('/api/login', loginRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/trades', tradeRoutes);

// Home Route
app.get('/', (req, res) => {
  res.send('Carbon Credit Trading Platform API is running!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});