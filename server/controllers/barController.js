const { QueryTypes } = require('sequelize');
const Bar = require('../models').bar;
const BarCatego = require('../models').bar_catego_in;
const { generateId } = require('../utils/generateIds');
const db = require('../models/index');
const BarValoration = require("../models/barValorationModel");

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

        let bar_valoration = new BarValoration;
        bar_valoration.id_bar = c_bar.id;
        bar_valoration.valorations = new Array();

        await bar_valoration.save();

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
            offset = 0;
        } else {
            offset = limit - 10;
        }

        var g_bars = await db.sequelize.query('SELECT k.*, k1.catego as catego2 ' +
            'FROM ( ' +
            'SELECT b.*, bc.nom as catego ' +
            'FROM bars b, bar_categos bc, bar_catego_ins bci ' +
            'WHERE b.id = bci.id_bar AND bci.id_catego = bc.id AND b.nom LIKE "%' + search + '%" AND b.city LIKE "%' + city + '%" AND bc.nom LIKE "%' + catego + '%" ' +
            ') k LEFT JOIN ( ' +
            'SELECT b.*, bc.nom as catego ' +
            'FROM bars b, bar_categos bc, bar_catego_ins bci ' +
            'WHERE b.id = bci.id_bar AND bci.id_catego = bc.id AND b.nom LIKE "%' + search + '%" AND b.city LIKE "%' + city + '%" ' +
            ') k1 ' +
            'ON k.id = k1.id AND k.catego <> k1.catego ' +
            'GROUP BY k.id ' +
            'LIMIT ' + offset + ', 9', { type: QueryTypes.SELECT });

        if (g_bars.length > 0) {

            var valoration_avg = await BarValoration.aggregate([
                { "$unwind": "$valorations" },
                {
                    "$group": { "_id": "$id_bar", media: { "$avg": "$valorations.rate" }, num: { "$sum": 1 } }
                }
            ]);

            const index_valorations = valoration_avg.map((bar) => {
                return bar._id;
            });

            var this_index = index_valorations.indexOf(g_bars[0].id);
            var this_valoration;
            var this_valoration_num;
            if (this_index > -1) {
                this_valoration = Math.round(valoration_avg[this_index].media);
                this_valoration_num = valoration_avg[this_index].num;
                this_valoration_order = (valoration_avg[this_index].media - 2) * this_valoration_num;
                console.log(this_valoration_order);
            } else {
                this_valoration = 0;
                this_valoration_num = 0;
                this_valoration_order = 0;
            }

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
                catego: [g_bars[0].catego, g_bars[0].catego2],
                valoration: this_valoration,
                valoration_num: this_valoration_num,
                valoration_order: this_valoration_order
            });
            for (let i = 1; i < g_bars.length; i++) {

                this_index = index_valorations.indexOf(g_bars[i].id);

                if (this_index > -1) {
                    this_valoration = Math.round(valoration_avg[this_index].media);
                    this_valoration_num = valoration_avg[this_index].num;
                    this_valoration_order = (valoration_avg[this_index].media - 2) * this_valoration_num;
                    console.log(this_valoration_order);
                } else {
                    this_valoration = 0;
                    this_valoration_num = 0;
                    this_valoration_order = 0;
                }

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
                    catego: [g_bars[i].catego, g_bars[i].catego2],
                    valoration: this_valoration,
                    valoration_num: this_valoration_num,
                    valoration_order: this_valoration_order
                });
            }
        }

        bars.sort((a, b) => (a.valoration_order < b.valoration_order) ? 1 : ((b.valoration_order < a.valoration_order) ? -1 : 0));

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