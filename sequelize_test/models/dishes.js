'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dishes = sequelize.define('Dishes', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    course: DataTypes.STRING
  }, {});
  Dishes.associate = function(models) {
    // associations can be defined here
  };
  return Dishes;
};