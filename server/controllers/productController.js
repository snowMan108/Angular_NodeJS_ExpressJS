const Product = require("../models/productModel.js");




exports.crearProduct = async (req, res) => {
  try {
      let product = new Product
      product.nom = req.body.nom
      product.categoria = req.body.categoria
      product.desc = req.body.desc
      product.preu = req.body.preu
      product.idbar = req.body.idbar
      await product.save();
      res.send(product);
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
        const { nom, categoria, desc, idbar, preu } = req.body;
        let actProd = new Product;
        actPrd = await Product.findById(req.params.id);

        if(!actPrd) {
            res.status(404).json({ msg: 'No existe el Producto'})
        }

        actPrd.nom = nom;
        actPrd.categoria = categoria;
        actPrd.idbar = idbar;
        actPrd.preu = preu;
        actPrd.desc = desc;

        actPrd = await Product.findOneAndUpdate({ _id:req.params.id},actPrd, { new:true })
        res.json(actPrd)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProduct = async (req, res) => {
    try {
        let nouPrd = new Product; 
        nouPrd = await Product.findById(req.params.id);
        if(!nouPrd) {
            console.log(req);
            res.status(404).json({ msg: 'No existe el Product'})
        } else {
            res.json(nouPrd)
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProduct = async (req, res) => {
    try {
        let elmPrd = new Product; 
        elmPrd = await Product.findById(req.params.id);
        if(!elmPrd) {
            res.status(404).json({ msg: 'No existe el Product'})
        }
        await Product.findOneAndRemove({ _id:req.params.id })
        res.json({ msg: 'Product eliminado con éxito!' })
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}