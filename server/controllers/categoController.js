const Catego = require("../models/categoModel.js");
const Product = require("../models/productModel.js");

exports.createCatego = async(req, res) => {
    try {
        let catego = new Catego;

        catego.id_bar = req.body.id_bar;
        catego.nom = req.body.nom;
        catego.descr = req.body.descr;
        catego.foto = req.body.foto;

        await catego.save();
        res.send(catego);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getBarCatego = async(req, res) => {
    try {
        const Categos = await Catego.find({ "id_bar": req.params.id_bar });
        res.json(Categos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getAllCategoProds = async(req, res) => {
    try {
        const Products = await Product.find({ "id_cat": req.params.id_catego });
        res.json(Products);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hobo un error');
    }
}

exports.updateCatego = async(req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).send('Hobo un error');
    }
}

exports.deleteCatego = async(req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).send('Hobo un error');
    }
}