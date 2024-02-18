const mongoose = require('mongoose');

const mongo_uri = process.env['MONGODB_URI']

async function initialiseDatabase() {
  try {
    await mongoose.connect(mongo_uri);
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

module.exports = initialiseDatabase;