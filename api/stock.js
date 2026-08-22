// Northstar Retail Co. - Inventory Query Endpoint
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  // 1. Define the path to our cache file
  const cachePath = path.join(process.cwd(), 'cache.json');
  
  try {
    // 2. Read the cached data synchronously
    const cacheData = fs.readFileSync(cachePath, 'utf8');
    const inventory = JSON.parse(cacheData);

    // 3. Get the requested item from the URL query
    const itemName = req.query.item;

    // 4. Check if item exists in the cache
    if (inventory[itemName] !== undefined) {
      res.status(200).json({ 
        item: itemName, 
        stock: inventory[itemName], 
        status: inventory[itemName] > 0 ? "In Stock" : "Out of Stock",
        source: "cached_data" // Proves we are reading from the cache!
      });
    } else {
      res.status(404).json({ error: "Item not found in Northstar cache" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to read inventory cache" });
  }
};
