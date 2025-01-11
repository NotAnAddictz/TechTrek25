// const express = require('express');
import express from 'express';
import { createClient } from '@supabase/supabase-js'
const router = express.Router();
// const { createClient } = require('@supabase/supabase-js');

// Supabase connection
// const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY);
const supabaseUrl = 'https://vfubkzgqdyqnrcumldqd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmdWJremdxZHlxbnJjdW1sZHFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1NjAzMjYsImV4cCI6MjA1MjEzNjMyNn0.gi0K8szcv58eqeHG5APKl51FSF0RUc28fzZzX_snH0Y'
const supabase = createClient(supabaseUrl, supabaseKey);

// 1. GET all companies
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase.from('companyaccount').select('*');
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 2. GET a company by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase.from('companyaccount').select('*').eq('companyid', id).single();
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// 3. POST - Create a new company
router.post('/', async (req, res) => {
  try {
    const { companyName, activeAccount, carbonBalance, cashBalance } = req.body;
    const { data, error } = await supabase.from('companyaccount').insert([
      { companyName, activeAccount, carbonBalance, cashBalance },
    ]);
    if (error) throw error;
    res.status(201).json({ message: 'Company created successfully', company: data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 4. PUT - Update a company account by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { companyName, activeAccount, carbonBalance, cashBalance } = req.body;
    const { data, error } = await supabase.from('companyaccount').update({ companyName, activeAccount, carbonBalance, cashBalance }).eq('companyId', id);
    if (error) throw error;
    res.status(200).json({ message: 'Company updated successfully', updated: data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 5. DELETE - Remove a company account
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase.from('companyaccount').delete().eq('companyid', id);
    if (error) throw error;
    res.status(200).json({ message: 'Company deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET current balances (carbon balance and cash balance) for a company by companyId
router.get('/balance/:id', async (req, res) => {
  try {
    const { id } = req.params;  // Extract companyId from URL
    const { data, error } = await supabase
      .from('companyaccount')
      .select('carbonbalance, cashbalance')
      .eq('companyid', id)
      .single();  // Fetch a single row

    if (error) throw error;

    res.status(200).json({
      companyid: id,
      carbonbalance: data.carbonbalance,
      cashbalance: data.cashbalance,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router


// const express = require('express');
// const router = express.Router();
// const { createClient } = require('@supabase/supabase-js');

// // Supabase connection
// const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY);

// // 1. GET all companies
// router.get('/', async (req, res) => {
//   try {
//     const { data, error } = await supabase.from('companyaccount').select('*');
//     if (error) throw error;
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // 2. GET a company by ID
// router.get('/:id', async (req, res) => {
//     try {
//       const { id } = req.params;
//       const { data, error } = await supabase.from('companyaccount').select('*').eq('companyId', id).single();
//       if (error) throw error;
//       res.status(200).json(data);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   });
  