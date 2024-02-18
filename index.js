const express = require("express");
const cors = require("cors");
const initialiseDatabase = require("./db/db.connection");
const inventoryRouter = require("./routes/inventory.route");
const saleRouter = require("./routes/sale.route");
const app = express();

initialiseDatabase();

app.use(cors());
app.use(express.json());
app.use("/items", inventoryRouter);
app.use("/sales", saleRouter);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("This is the inventory management API");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
