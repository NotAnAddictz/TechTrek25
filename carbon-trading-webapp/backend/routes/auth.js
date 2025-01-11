import dotenv from 'dotenv';
dotenv.config();
app.get('/api/protected', (req, res) => {
    // verify token
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
  
    try {
      const decoded = jwt.verify(token, process.env.HASH_KEY);
      res.json({ message: 'Protected data', user: decoded });
    } catch (err) {
      res.status(403).json({ error: 'Invalid or expired token' });
    }
  });