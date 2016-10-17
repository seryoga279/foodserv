'use strict';
module.exports = function(sequelize, DataTypes) {
  var GroceryItem = sequelize.define('GroceryItem', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return GroceryItem;
};