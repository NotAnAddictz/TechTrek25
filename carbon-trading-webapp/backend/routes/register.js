import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router(); // Create a router instance

const saltRounds = 10;
// Supabase connection
const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_API_KEY);
router.post('/', async (req, res) => {
  try {
  
    const { companyname, username, password } = req.body;

    const { data, error } = await supabase
      .from('companyaccount')
      .select('username')
      .eq('username', username);

    // Error if user exists
    if (error || data.length > 0) {
        return res.status(400).json({ error: error });
    }else {
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) {
                return res.status(500).json({ error: 'Internal server error' });
            }
            let time = new Date(Date.now()).toISOString().replace('T',' ').replace('Z','');
            
            const { data, error } = await supabase
                .from('companyaccount')
                .insert([{companyname:companyname,activeaccount:true, cashbalance:0,carbonbalance:0,createddatetime:time,updateddatetime:time, username:username, passwordHash: hash }]);
            
            if (error) {
                return res.status(500).json({ error: error });
            }
            res.json({ message: 'User registered successfully' });
        });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error, generic' });
  }
});
export default router