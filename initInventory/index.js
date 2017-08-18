var initInventory = require(__dirname + '//initinventory.json');;

module.exports = function (context, req) {
  if (context.bindings.inventoryStatus == null) {
    context.log("initializing inventory table");
    context.bindings.inventory = initInventory;
  } else {
    context.log("inventory table already initialized");
  }
  context.done(null, { body:"done"});
};