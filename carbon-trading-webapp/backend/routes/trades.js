import express from 'express';
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router(); // Create a router instance

const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_API_KEY);
router.get('/', async (req, res) => {
  try {

    const { data, error } = await supabase
      .from('outstandingrequest')
      .select('carbonunitprice,carbonquantity,companyid,requesttype,requeststatus, companyaccount!fk_company(companyname)')
    if (data.length  > 0){
        res.send(data)
    }else{
        res.status(404).json({ error: 'No trades found' });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
export default router