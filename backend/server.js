require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const chartRoutes = require('./routes/chart');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/chart', chartRoutes);

// basic health check
app.get('/api/ping', (req, res) => res.json({ ok: true }));

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, { })
  .then(()=> {
    console.log('Connected to MongoDB');
    app.listen(PORT, ()=> console.log(`Server listening on ${PORT}`));
  })
  .catch(err => {
    console.error('Mongo connection error', err);
  });
