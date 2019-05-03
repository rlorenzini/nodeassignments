'use strict';
module.exports = (sequelize, DataTypes) => {
  const coordinates = sequelize.define('coordinates', {
    longitude: DataTypes.INTEGER,
    latitude: DataTypes.INTEGER
  }, {});
  coordinates.associate = function(models) {
    // associations can be defined here
  };
  return coordinates;
};