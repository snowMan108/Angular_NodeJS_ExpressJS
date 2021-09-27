const { QueryTypes } = require('sequelize');
const Bar = require('../models').bar;
const BarCatego = require('../models').bar_catego_in;
const { generateId } = require('../utils/generateIds');
const db = require('../models/index');

module.exports.createBar = async(req, res) => {
    try {
        var c_bar = await Bar.create({
            id: generateId(),
            nom: req.body.nom,
            descr: req.body.descr,
            direcc: req.body.direcc,
            city: req.body.city,
            coords: req.body.coords,
            horari: req.body.horari,
            owner: req.body.owner,
            foto: req.body.foto,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        if (req.body.id_catego.length == 2) {
            for (let i = 0; i < req.body.id_catego.length; i++) {
                await BarCatego.create({
                    id_catego: req.body.id_catego[i],
                    id_bar: c_bar.id,
                });
            }
        } else if (req.body.id_catego.length == 1) {
            await BarCatego.create({
                id_catego: req.body.id_catego[0],
                id_bar: c_bar.id,
            });
        }

        res.json(c_bar);
    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR 500');
    }
}
module.exports.getBars = async(req, res) => {
    try {
        var catego = req.params.catego;
        var search = req.params.search;
        var city = req.params.city;
        var limit = req.params.limit;

        if (catego == "no-param") {
            catego = "";
        }
        if (search == "no-param") {
            search = "";
        }
        if (city == "no-param") {
            city = "";
        }
        if (limit == "no-param") {
            limit = 10;
        }

        var g_bars = await db.sequelize.query('SELECT b.*, bc.nom as catego FROM bars b, bar_categos bc, bar_catego_ins bci WHERE b.id = bci.id_bar AND bci.id_catego = bc.id AND b.nom LIKE "%' + search + '%" AND b.city LIKE "%' + city + '%" AND bc.nom LIKE "%' + catego + '%" ORDER BY b.id LIMIT ' + limit, { type: QueryTypes.SELECT });


        if (g_bars.length > 0) {
            var bars = new Array({
                id: g_bars[0].id,
                nom: g_bars[0].nom,
                slug: g_bars[0].slug,
                descr: g_bars[0].descr,
                direcc: g_bars[0].direcc,
                city: g_bars[0].city,
                coords: g_bars[0].coords,
                horari: g_bars[0].horari,
                owner: g_bars[0].owner,
                foto: g_bars[0].foto,
                catego: [g_bars[0].catego]
            });
            for (let i = 1; i < g_bars.length; i++) {
                if (bars[bars.length - 1].id == g_bars[i].id) {
                    bars[bars.length - 1].catego.push(g_bars[i].catego);
                } else {

                    bars.push({
                        id: g_bars[i].id,
                        nom: g_bars[i].nom,
                        slug: g_bars[i].slug,
                        descr: g_bars[i].descr,
                        direcc: g_bars[i].direcc,
                        city: g_bars[i].city,
                        coords: g_bars[i].coords,
                        horari: g_bars[i].horari,
                        owner: g_bars[i].owner,
                        foto: g_bars[i].foto,
                        catego: [g_bars[i].catego]
                    });
                }
            }
        }

        res.json(bars);
    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR 500');
    }
}
module.exports.updateBarInfo = async(req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR 500');
    }
}
module.exports.deleteBar = async(req, res) => {
    try {
        var findBar = await Bar.findAll({
            where: {
                id: req.params.id_bar
            }
        });

        if (!findBar) {
            res.status(404).json({ msg: 'No existe el Bar' });
        }

        await Bar.destroy({
            where: {
                id: req.params.id_bar
            }
        });

        await BarCatego.destroy({
            where: {
                id_bar: req.params.id_bar
            }
        });

        res.json("Se ha borrado correctamente el bar");
    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR 500');
    }
}