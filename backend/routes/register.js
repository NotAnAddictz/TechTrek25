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
  
    const { username, password } = req.body;

    const { data, error } = await supabase
      .from('loginaccount')
      .select('username')
      .eq('username', username);

    // Error if user exists
    if (error || data.length > 0) {
        return res.status(400).json({ error: 'User already exists' });
    }else {

        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) {
                return res.status(500).json({ error: 'Internal server error -> bcrypt' });
            }
            // Insert user into database
            const { data, error } = await supabase
                .from('loginaccount')
                .insert([{ username, passwordHash: hash }]);
            
            if (error) {
                return res.status(500).json({ error: 'Internal server error insertion' });
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