import express from 'express';
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router(); // Create a router instance

const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_API_KEY);
router.get('/', async (req, res) => {
  try {
    // Get all trades which are approved
    const { data, error } = await supabase
      .from('outstandingrequest')
      .select('carbonunitprice,carbonquantity,companyid,requesttype,requeststatus')
    res.send(data)
    // Return all trades
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
export default router