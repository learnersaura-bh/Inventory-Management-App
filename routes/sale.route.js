const express = require("express");
const {
  addSales,
  retrieveAllSales,
} = require("../controllers/sale.controller");

const saleRouter = express.Router();

saleRouter.post("/", async (req, res) => {
  try {
    const newSale = await addSales(req.body);
    res.status(201).json(newSale);
  } catch (error) {
    console.error("Error creating sale:", error.message);
    res.status(500).json({ error: "Failed to create sale" });
  }
});

saleRouter.get("/", async (req, res) => {
  try {
    const sales = await retrieveAllSales();
    res.status(200).json(sales);
  } catch (error) {
    console.error("Error retrieving sales:", error.message);
    res.status(500).json({ error: "Failed to retrieve sales" });
  }
});

module.exports = saleRouter;
