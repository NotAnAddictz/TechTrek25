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

// import express from 'express';
// import { createClient } from '@supabase/supabase-js'

// const companyRoutes = require('/routes/companyRoute.js')
// const outstandingRoutes = require('/routes/outstandingRoute.js')

// // const express = require('express')
// const app = express();
// const port = 3000;

// const supabaseUrl = 'https://vfubkzgqdyqnrcumldqd.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmdWJremdxZHlxbnJjdW1sZHFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1NjAzMjYsImV4cCI6MjA1MjEzNjMyNn0.gi0K8szcv58eqeHG5APKl51FSF0RUc28fzZzX_snH0Y'
// const supabase = createClient(supabaseUrl, supabaseKey)

// app.use(express.json())

// // Routes
// app.use('/api/company', companyRoutes); // Endpoints related to companies
// app.use('/api/request', outstandingRoutes); // Endpoints related to requests
  
// app.listen(port, () => {
// console.log(`Example app listening on port ${port}`)
// })
      
// app.get('/outstandingRequests/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const {data, error} = await supabase
//             .from('outstandingrequests')
//             .select()
//             .eq('companyid', id)
//             .single();
//         res.send(data);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // // Start the server
// // app.listen(PORT, () => {
// //     console.log(`Server is running on http://localhost:${PORT}`);
// //   });
  







