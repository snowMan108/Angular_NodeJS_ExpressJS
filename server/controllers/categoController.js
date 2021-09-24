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
        res.status(500).send('ERROR 500');
    }
}

exports.getBarCatego = async(req, res) => {
    try {
        const Categos = await Catego.find({ "id_bar": req.params.id_bar });
        res.json(Categos);
    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR 500');
    }
}

exports.getAllCategoProds = async(req, res) => {
    try {
        const Products = await Product.find({ "id_cat": req.params.id_catego });
        res.json(Products);
    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR 500');
    }
}

exports.updateCatego = async(req, res) => {
    try {
        const { id_bar, nom, descr, foto } = req.body;
        let actCatego = new Catego;
        actCatego = await Catego.findById(req.params.id_catego);

        if (!actCatego) {
            res.status(404).json({ msg: 'No existe la categoria' })
        }

        actCatego.id_bar = id_bar;
        actCatego.nom = nom;
        actCatego.descr = descr;
        actCatego.foto = foto;

        actCatego = await Catego.findOneAndUpdate({ _id: req.params.id_catego }, actCatego, { new: true });
        res.json(actCatego);
    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR 500');
    }
}

exports.deleteCatego = async(req, res) => {
    try {
        let delCatego = new Catego;
        delCatego = await Catego.findById(req.params.id_catego);
        if (!delCatego) {
            res.status(404).json({ msg: 'No existe la categoria' });
        }
        await Catego.findOneAndRemove({ _id: req.params.id_catego });
        res.json({ msg: 'Categoria eliminada con éxito!' });
    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR 500');
    }
}