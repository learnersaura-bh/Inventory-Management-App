const Inventory = require("../models/inventory.model");

async function addItem(item) {
  try {
    const newItem = new Inventory(item);
    const savedItem = await newItem.save();
    console.log("Saved item successfully:", savedItem);
    return savedItem;
  } catch (error) {
    console.error("Error adding item:", error.message);
    throw error;
  }
}

async function getAllItems() {
  try {
    const allItems = await Inventory.find();
    console.log("All items:", allItems);
    return allItems;
  } catch (error) {
    console.error("Error getting all items:", error.message);
    throw error;
  }
}

async function deleteItem(itemId) {
  try {
    const deletedItem = await Inventory.findByIdAndDelete(itemId);
    if (!deletedItem) {
      console.log("Item not found");
      return null;
    }
    return deletedItem;
  } catch (error) {
    console.error("Error deleting item:", error.message);
    throw error;
  }
}

async function updateItem(itemId, updatedItem) {
  try {
    const fullUpdatedItem = await Inventory.findByIdAndUpdate(
      itemId,
      updatedItem,
      { new: true },
    );
    if (!fullUpdatedItem) {
      console.log("Item not found");
      return null;
    }
    return fullUpdatedItem;
  } catch (error) {
    console.error("Error updating item:", error.message);
    throw error;
  }
}

module.exports = {
  addItem,
  getAllItems,
  deleteItem,
  updateItem,
};
