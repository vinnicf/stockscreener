const express = require('express');
const router = express.Router();
const Stock = require('../models/stock'); // Importing the model

router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.send(stocks);
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
});

module.exports = router;