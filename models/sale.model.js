const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true },
);

const Sale = mongoose.model("Sale", saleSchema);

module.exports = Sale;
