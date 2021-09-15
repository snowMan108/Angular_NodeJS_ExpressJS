const express = require('express');
console.log("entra routes");
const router = express.Router();
const productController = require('../controllers/productController.js');

//api/productos
router.post('/', productController.crearProduct);
router.get('/', productController.obtenerProducts);
router.put('/:id', productController.actualizarProduct);
router.get('/:id', productController.obtenerProduct);
router.delete('/:id', productController.eliminarProduct);

module.exports = router;