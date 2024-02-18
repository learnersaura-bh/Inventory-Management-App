const express = require("express");
const {
  addItem,
  getAllItems,
  deleteItem,
  updateItem,
} = require("../controllers/inventory.controller");

const inventoryRouter = express.Router();

inventoryRouter.post("/", async (req, res) => {
  try {
    const newItem = await addItem(req.body);
    res.status(201).json({ message: "Item added successfully", item: newItem });
  } catch (error) {
    console.error("Error adding item:", error.message);
    res
      .status(500)
      .json({ error: "Failed to add item", message: error.message });
  }
});

inventoryRouter.get("/", async (req, res) => {
  try {
    const allItems = await getAllItems();
    res.json(allItems);
  } catch (error) {
    console.error("Error getting all items:", error.message);
    res
      .status(500)
      .json({ error: "Failed to fetch items", message: error.message });
  }
});

inventoryRouter.delete("/:itemId", async (req, res) => {
  try {
    const deletedItem = await deleteItem(req.params.itemId);
    if (deletedItem) {
      console.log("Item deleted successfully:", deletedItem);
      res.status(200).json(deletedItem);
    } else {
      console.log("Item not found");
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    console.error("Error deleting item:", error.message);
    res
      .status(500)
      .json({ error: "Failed to delete item", message: error.message });
  }
});

inventoryRouter.put("/:itemId", async (req, res) => {
  try {
    const updatedItem = await updateItem(req.params.itemId, req.body);
    if (updatedItem) {
      console.log("Item updated successfully:", updatedItem);
      res
        .status(200)
        .json({ message: "Item updated successfully", item: updatedItem });
    } else {
      console.log("Item not found");
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    console.error("Error updating item:", error.message);
    res
      .status(500)
      .json({ error: "Failed to update item", message: error.message });
  }
});

module.exports = inventoryRouter;
