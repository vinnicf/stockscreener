const express = require('express');
const router = express.Router();
const Stock = require('../models/stocks'); // Importing the model

// This route now handles GET requests to "/stocks"
router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.send(stocks);
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
});



router.post('/', async (req, res) => {
  try {
    const newStock = new Stock(req.body);
    const savedStock = await newStock.save();
    res.status(201).send(savedStock);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;