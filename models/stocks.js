const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  price: Number,
  // Add other fields as needed
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
