import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router(); // Create a router instance

// Supabase connection
const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_API_KEY);
router.post('/', async (req, res) => {
  try {
  
    const { username, password } = req.body;
    
    // Check if user exists
    const { data, error } = await supabase
      .from('companyaccount')
      .select('username, passwordHash,companyid')
      .eq('username', username);

    if (error || !data || data.length === 0) {
      return res.status(400).json({ error: 'User does not exist' });
    }

    const user = data[0];
    
    // bcrypt.compare(password, user.passwordHash, (err, result) => {
    //   if (err.length == null) {
    //     return res.status(400).json({error:err});
    //   }
    //   else if (!result){
    //     return res.status(401).json({err:"no results"})
    //   }

    if (password == user.passwordHash){
      if (err.length == null) {
            return res.status(400).json({error:err});
          }
    }
;
      
    let time = new Date(Date.now()).toISOString().replace('T',' ').replace('Z','');
    let expire_time = new Date(new Date().setHours(new Date().getHours() + 2));
      // Create token
      const token = jwt.sign({ username: user.username }, process.env.HASH_KEY, {
        expiresIn: '2h', 
      });
      const erorr = await supabase
      .from('sessions')
      .insert({companyid:user.companyid, token:token,expire_at:expire_time})

      if (error){
        res.status(500).json({error: "Unable to geneerate Token"})
      }
      res.json({error: error, token: token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


export default router;