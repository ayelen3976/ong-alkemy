'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slide extends Model {
    
    static associate(models) {
    }
  };
  Slide.init({
    organizationId: DataTypes.INTEGER,
    order: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Slide',
  });
  return Slide;
};