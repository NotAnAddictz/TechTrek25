// const express = require('express');
// const { createClient } = require('@supabase/supabase-js');

import express from 'express';
import { createClient } from '@supabase/supabase-js'
const router = express.Router();

// const app = express();
// const port = 3000;

const supabaseUrl = 'https://vfubkzgqdyqnrcumldqd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmdWJremdxZHlxbnJjdW1sZHFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1NjAzMjYsImV4cCI6MjA1MjEzNjMyNn0.gi0K8szcv58eqeHG5APKl51FSF0RUc28fzZzX_snH0Y'
const supabase = createClient(supabaseUrl, supabaseKey);

// 1. GET all outstanding requests
router.get('/outstanding', async (req, res) => {
  try {
    const { data, error } = await supabase.from('outstandingrequest').select('*');
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 2. GET a specific request by ID
router.get('/outstanding/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase.from('outstandingrequest').select('*').eq('id', id).single();
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 3. POST - Create a new outstanding request
router.post('/outstanding', async (req, res) => {
  try {
    const { companyid, requestorcompanyid, carbonunitprice, carbonquantity, requestreason, requeststatus, requesttype } = req.body;
    const { data, error } = await supabase.from('outstandingrequest').insert([
      { companyid, requestorcompanyid, carbonunitprice, carbonquantity, requestreason, requeststatus, requesttype },
    ]);
    if (error) throw error;
    res.status(201).json({ message: 'Outstanding request created', request: data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 4. POST - Create a new request received (alerts)
router.post('/received', async (req, res) => {
  try {
    const { requestId, alertDatetime, alertText, alertStatus, alertViewDate } = req.body;
    const { data, error } = await supabase.from('requestreceived').insert([
      { requestId, alertDatetime, alertText, alertStatus, alertViewDate },
    ]);
    if (error) throw error;
    res.status(201).json({ message: 'Request received alert created', alert: data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 5. GET all alerts
router.get('/alerts', async (req, res) => {
  try {
    const { data, error } = await supabase.from('requestreceived').select('*');
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 6. GET oustanding request by companyId
router.get('/outstanding/company/:companyId', async (req, res) => {
    try {
        const { companyId } = req.params;
        const {data, error} = await supabase
            .from('outstandingrequest')
            .select('*')
            .eq('companyid', companyId);
        if (error) throw error;
        res.status(200).json(data);
        // res.send(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


// 7. DELETE outstanding request
router.delete('/outstanding/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {data, error} = await supabase
        .from('outstandingrequest')
        .delete()
        .eq('id', id);
    if (error) throw error;
    res.status(200).json({ message: 'Outstanding request deleted',  request: data });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
  })

// 8. UPDATE outstanding request
router.put('/outstanding/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error} = await supabase
        .from('outstandingrequest')
        .update({ carbonunitprice: 1000 })
        .eq('id', id);
    if (error) throw error;
    res.status(200).json({ message: 'Outstanding request updated',  request: data });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
  })


export default router