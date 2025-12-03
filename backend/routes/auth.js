const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

//Hard-coded test credentials:
const TEST_USER = {
  username: 'thomas',
  password: 'thomas',
  displayName: 'Test User'
};

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';
const JWT_EXPIRY = process.env.JWT_EXPIRY || '2h';

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === TEST_USER.username && password === TEST_USER.password) {
    // create token
    const payload = { username: TEST_USER.username, displayName: TEST_USER.displayName };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });
    return res.json({ success: true, token, user: payload });
  }
  return res.status(401).json({ success: false, message: 'Invalid credentials' });
});

module.exports = router;
