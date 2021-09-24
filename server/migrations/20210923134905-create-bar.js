'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('bars', {
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
            direcc: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            coords: {
                type: Sequelize.STRING
            },
            horari: {
                type: Sequelize.STRING
            },
            owner: {
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
        await queryInterface.dropTable('bars');
    }
};