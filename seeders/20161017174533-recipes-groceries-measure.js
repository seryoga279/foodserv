'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('GroceryItems', [
      { name: 'Milk',  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bread', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Water', createdAt: new Date(), updatedAt: new Date() }
    ], {})
    .then(() => queryInterface.bulkInsert('Recipes', [
      { name: 'Pasta', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Soup',  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kebab', createdAt: new Date(), updatedAt: new Date() }
    ], {}) 
    .then(() => queryInterface.bulkInsert('Measures', [
      { name: 'gramm', type:'mass',createdAt: new Date(), updatedAt: new Date() },
      { name: 'kg', type:'mass', createdAt:  new Date(), updatedAt: new Date() },
      { name: 'ml', type:'volume',createdAt: new Date(), updatedAt: new Date() }
    ], {})))
    .catch(err=>console.log(err));
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('GroceryItem', null, {})
      .then(() => queryInterface.bulkDelete('Recipe', null, {})
      .then(() => queryInterface.bulkDelete('Measure', null, {})) );
  }
};
