const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//api/productos
router.post('/', productController.crearProducto);
router.get('/', productController.obtenerProductos);
router.put('/:id', productController.actualizarProducto);
router.get('/:id', productController.obtenerProducto);
router.delete('/:id', productController.eliminarProducto);

module.exports = router;