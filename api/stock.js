// Northstar Retail Co. - Inventory API
module.exports = (req, res) => {
  // 1. Fake database of items and their stock levels
  const inventory = {
    laptop: 15,
    mouse: 0,
    keyboard: 42
  };

  // 2. Get the item name the user is asking about from the URL
  const itemName = req.query.item;

  // 3. Check if the item exists in our fake database
  if (inventory[itemName] !== undefined) {
    // If it exists, send back a 200 (Success) status with the stock info
    res.status(200).json({ 
      item: itemName, 
      stock: inventory[itemName], 
      status: inventory[itemName] > 0 ? "In Stock" : "Out of Stock" 
    });
  } else {
    // If it doesn't exist, send back a 404 (Not Found) status
    res.status(404).json({ error: "Item not found in Northstar database" });
  }
};
