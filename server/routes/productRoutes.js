const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');

//api/productos
router.post('/', productController.crearProduct);
router.get('/:id_bar', productController.obtenerProducts);
router.put('/:id', productController.actualizarProduct);
router.get('/prod/:id', productController.obtenerProduct);
router.delete('/:id', productController.eliminarProduct);



module.exports = router;