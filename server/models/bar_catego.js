'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class bar_catego extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    bar_catego.init({
        id: {
            primaryKey: true,
            type: DataTypes.STRING,
        },
        nom: DataTypes.STRING,
        descr: DataTypes.STRING,
        foto: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'bar_catego',
    });
    return bar_catego;
};