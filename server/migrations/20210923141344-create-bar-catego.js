'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('bar_categos', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            nom: {
                type: Sequelize.STRING
            },
            descr: {
                type: Sequelize.STRING
            },
            foto: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('bar_categos');
    }
};