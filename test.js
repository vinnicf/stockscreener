const mongoose = require('mongoose');
const Stock = require('./models/stocks');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB...');

    const testStock = new Stock({
      name: 'Braskem',
      symbol: 'BRKM5',
      price: 100
      // ...other fields as necessary
    });

    return testStock.save(); // Return the promise here
  })
  .then(doc => {
    console.log('Document saved:', doc);
    return mongoose.disconnect(); // It's good practice to close the connection when done
  })
  .catch(err => {
    console.error('Error:', err);
    return mongoose.disconnect(); // Make sure to disconnect even on error
  });
