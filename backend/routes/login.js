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

    // Check if user exists
    const { data, error } = await supabase
      .from('loginaccount')
      .select('username, passwordHash')
      .eq('username', username);

    res.send(data)
    if (error || !data || data.length === 0) {
      return res.status(400).json({ error: 'User does not exist' });
    }

    const user = data[0];
    bcrypt.compare(password, user.passwordHash, (err, result) => {
      if (err || !result) {
        return res.status(400).json({ error: 'Invalid password' });
      }

      // Generate JWT if password matches
      const token = jwt.sign({ username: user.username }, SECRET, {
        expiresIn: '1h', // Token expiration time
      });

      res.json({ token });
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


export default router;