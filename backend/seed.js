require('dotenv').config();
const mongoose = require('mongoose');
const ChartData = require('./models/ChartData');

const data = {
  name: 'o1 AIME accuracy during training',
  labels: ['35', '41', '51', '52', '56', '59', '61', '75'],
  datasets: [
    { label: 'Accuracy (%)', data: [35, 41, 51, 52, 56, 59, 61, 75] }
  ]
};

mongoose.connect(process.env.MONGO_URI, {  })
  .then(async () => {
    console.log('Connected to MongoDB for seeding');
    await ChartData.deleteMany({});
    await ChartData.create(data);
    console.log('Seeded chart data');
    process.exit(0);
  });
