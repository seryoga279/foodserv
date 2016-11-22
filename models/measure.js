'use strict';
module.exports = function(sequelize, DataTypes) {
  var Measure = sequelize.define('Measure', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    power:DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Measure;
};