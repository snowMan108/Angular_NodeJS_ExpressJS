const Sequelize = require('sequelize');
const usuario = require('../models').user;
module.exports = {
 create(req, res) {
    return usuario
        .create ({
             id: req.body.id,
             nom: req.body.nom,
             passwd: req.body.passwd,
             email: req.body.email,
             foto: req.body.foto,
             estado: req.body.estado
        })
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
 },
//  list(_, res) {
//      return usuario.findAll({})
//         .then(usuario => res.status(200).send(usuario))
//         .catch(error => res.status(400).send(error))
//  },
//  find (req, res) {
//      return usuario.findAll({
//          where: {
//              username: req.params.username,
//          }
//      })
//      .then(usuario => res.status(200).send(usuario))
//      .catch(error => res.status(400).send(error))
//   },
};