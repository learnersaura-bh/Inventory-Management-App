const Sale = require('../models/sale.model.js');

const addSales = async (salesData) => {
  try {
    const newSale = new Sale(salesData);
    const savedSale = await newSale.save();
    return savedSale;
  } catch (error) {
    console.error('Error while adding sales:', error.message);
    throw error;
  }
}

const retrieveAllSales = async () => {
  try {
    const sales = await Sale.find();
    return sales;
  } catch (error) {
    console.error('Error while getting sales:', error.message);
    throw error;
  }
}

module.exports = { addSales, retrieveAllSales };
