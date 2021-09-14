const Product = require("../models/product.model.js");

exports.crearProduct = async (req, res) => {
  try {
      let Product;
      Product = new Product(req.body);
      await Product.save();
      res.send(Product);
  } catch (error) {
      console.log(error);
      res.status(500).send('Hubo un error');
  }
}

exports.obtenerProducts = async (req, res) => {
    try {
        const Products = await Product.find();
        res.json(Products) 
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarProduct = async (req, res) => {
    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        let Product = await Product.findById(req.params.id);

        if(!Product) {
            res.status(404).json({ msg: 'No existe el Product'})
        }

        Product.nombre = nombre;
        Product.categoria = categoria;
        Product.ubicacion = ubicacion;
        Product.precio = precio;

        Product = await Product.findOneAndUpdate({ _id:req.params.id},Product, { new:true })
        res.json(Product)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProduct = async (req, res) => {
    try {
        let Product = await Product.findById(req.params.id);
        if(!Product) {
            res.status(404).json({ msg: 'No existe el Product'})
        }
        res.json(Product)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProduct = async (req, res) => {
    try {
        let Product = await Product.findById(req.params.id);
        if(!Product) {
            res.status(404).json({ msg: 'No existe el Product'})
        }
        await Product.findOneAndRemove({ _id:req.params.id })
        res.json({ msg: 'Product eliminado con éxito!' })
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}