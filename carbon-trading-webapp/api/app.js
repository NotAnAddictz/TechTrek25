import dotenv from 'dotenv';
import express from 'express';
import { createClient } from '@supabase/supabase-js'
import companyRoutes from './routes/companyRoutes.js';
import outstandingRoutes from './routes/outstandingRoutes.js';

dotenv.config();

const supabaseUrl = 'https://vfubkzgqdyqnrcumldqd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmdWJremdxZHlxbnJjdW1sZHFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1NjAzMjYsImV4cCI6MjA1MjEzNjMyNn0.gi0K8szcv58eqeHG5APKl51FSF0RUc28fzZzX_snH0Y'
const supabase = createClient(supabaseUrl, supabaseKey);

// require('dotenv').config();
// const express = require('express');
const app = express();
// const companyRoutes = require('./routes/companyRoutes');
// const requestRoutes = require('./routes/oustandingRoutes');

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware for parsing JSON

// Routes
app.use('/api/company', companyRoutes); // Endpoints related to companies
app.use('/api/request', outstandingRoutes); // Endpoints related to requests

// Home Route
app.get('/', (req, res) => {
  res.send('Carbon Credit Trading Platform API is running!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
  







