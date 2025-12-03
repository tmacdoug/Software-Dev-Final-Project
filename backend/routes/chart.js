const express = require('express');
const ChartData = require('../models/ChartData');
const jwt = require('jsonwebtoken');

const router = express.Router();

//middleware to verify JWT
function authenticate(req, res, next) {
  const auth = req.headers['authorization'];
  if (!auth) return res.status(401).json({ message: 'Missing Authorization header' });
  const parts = auth.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') return res.status(401).json({ message: 'Invalid Authorization header format' });
  const token = parts[1];
  jwt.verify(token, process.env.JWT_SECRET || 'dev_secret', (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });
    req.user = decoded;
    next();
  });
}

router.get('/', authenticate, async (req, res) => {
  try {
    const chart = await ChartData.findOne({}).sort({ createdAt: -1 }).lean();
    if (!chart) return res.status(404).json({ message: 'No chart data found' });
    return res.json({ success: true, chart });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
