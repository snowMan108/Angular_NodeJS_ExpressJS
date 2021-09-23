'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bar_catego_in extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  bar_catego_in.init({
    id_catego: DataTypes.STRING,
    id_bar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bar_catego_in',
  });
  return bar_catego_in;
};