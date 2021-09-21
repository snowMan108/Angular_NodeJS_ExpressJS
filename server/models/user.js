'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nom: DataTypes.STRING,
    passwd: DataTypes.STRING,
    email: DataTypes.STRING,
    foto: DataTypes.STRING,
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
    timestamps: false
  });
  return user;
};