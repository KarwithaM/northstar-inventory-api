// Northstar Retail Co. - Polling Script
// In production, this is triggered by a cron job every 5 minutes.
const fs = require('fs');
const path = require('path');

console.log("Starting warehouse poll...");

try {
  // 1. Read the source of truth (simulating an API call to the warehouse)
  const sourcePath = path.join(process.cwd(), 'warehouse-source.json');
  const sourceData = fs.readFileSync(sourcePath, 'utf8');
  
  // 2. Simulate a slight data change from the warehouse (e.g., someone bought a laptop)
  const inventory = JSON.parse(sourceData);
  inventory.laptop = inventory.laptop - 1; // Simulate a sale
  console.log(`Fetched new data. Laptop stock is now: ${inventory.laptop}`);

  // 3. Write the new data to the cache
  const cachePath = path.join(process.cwd(), 'cache.json');
  fs.writeFileSync(cachePath, JSON.stringify(inventory, null, 2));
  
  console.log("Cache updated successfully. Polling complete.");
} catch (error) {
  console.error("Polling failed:", error.message);
}
