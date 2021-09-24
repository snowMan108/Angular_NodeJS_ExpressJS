'use strict';
const {
    Model
} = require('sequelize');

const SequelizeSlugify = require('sequelize-slugify');

module.exports = (sequelize, DataTypes) => {
    class bar extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    bar.init({
        id: {
            primaryKey: true,
            type: DataTypes.STRING,
        },
        nom: DataTypes.STRING,
        slug: {
            type: DataTypes.STRING,
            unique: true
        },
        descr: DataTypes.STRING,
        direcc: DataTypes.STRING,
        city: DataTypes.STRING,
        coords: DataTypes.STRING,
        horari: DataTypes.STRING,
        owner: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'bar',
    });

    SequelizeSlugify.slugifyModel(bar, { source: ['nom'], slugOptions: { lower: true } });

    return bar;
};