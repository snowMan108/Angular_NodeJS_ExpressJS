const { QueryTypes } = require('sequelize');
const Catego = require('../models').bar_catego;
const { generateId } = require('../utils/generateIds');
const db = require('../models/index');

// module.exports = {
//     createCatego(req, res) {
//         return Catego.create({
//                 id: generateId(),
//                 nom: req.body.nom,
//                 descr: req.body.descr,
//                 foto: req.body.foto,
//                 createdAt: new Date(),
//                 updatedAt: new Date(),
//             }).then(bar => res.status(200).send(bar))
//             .catch(error => res.status(400).send(error));
//     },
//     updateCatego(req, res) {

//     },
//     deleteCatego(req, res) {

//     }
// }

module.exports.createCatego = async(req, res) => {
    try {
        var c_catego = await Catego.create({
            id: generateId(),
            nom: req.body.nom,
            descr: req.body.descr,
            foto: req.body.foto,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { returning: true });

        console.log("Mira esto --- " + c_catego);

        res.json(c_catego);
    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR 500');
    }
}

module.exports.getAllCategos = async(req, res) => {
    try {

        var categories = await db.sequelize.query("SELECT b1.* FROM bar_categos b1 RIGHT JOIN bar_catego_ins b2 ON b1.id = b2.id_catego AND b2.id IS NOT NULL", { type: QueryTypes.SELECT });

        res.json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR 500');
    }
}

module.exports.updateCatego = async(req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR 500');
    }
}

module.exports.deleteCatego = async(req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR 500');
    }
}