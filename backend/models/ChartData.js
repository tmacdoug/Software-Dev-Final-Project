const mongoose = require('mongoose');

const ChartDataSchema = new mongoose.Schema({
  name: String,
  labels: [String],
  datasets: [{
    label: String,
    data: [Number]
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ChartData', ChartDataSchema);
