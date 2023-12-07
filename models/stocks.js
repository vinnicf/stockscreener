const mongoose = require('mongoose');

const financialYearSchema = new mongoose.Schema({
  year: Number,
  revenue: Number,
  earnings: Number,
  assets: Number,
  liabilities: Number,
  // Add any additional balance sheet items you need
});

const stockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  financials: [financialYearSchema],
  // Add any other fields that are relevant to your stock model
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
