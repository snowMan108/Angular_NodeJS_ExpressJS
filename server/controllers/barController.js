const Sequelize = require('sequelize');
const Bar = require('../models').bar;
const { generateId } = require('../utils/generateIds');

module.exports = {
    createBar(req, res) {
        return Bar.create({
                id: generateId(),
                nom: req.body.nom,
                descr: req.body.descr,
                direcc: req.body.descr,
                coords: req.body.coords,
                horari: req.body.horari,
                owner: req.body.owner,
                createdAt: new Date(),
                updatedAt: new Date(),
            }).then(bar => res.status(200).send(bar))
            .catch(error => res.status(400).send(error));
    },
    getBars(req, res) {
        return Bar.findAll({
            where: {

            }
        });
    },
    updateBarInfo(req, res) {

    },
    deleteBar(req, res) {

    }
}