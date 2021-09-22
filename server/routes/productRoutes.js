const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');
const categoController = require('../controllers/categoController.js');

//api/productos
router.post('/', productController.crearProduct);
router.get('/', productController.obtenerProducts);
router.put('/:id', productController.actualizarProduct);
router.get('/:id', productController.obtenerProduct);
router.delete('/:id', productController.eliminarProduct);

//rutas categorias
router.post('/categories/', categoController.createCatego);
router.get('/categories/:id_bar', categoController.getBarCatego);
router.get('/categories/prods/:id_catego', categoController.getAllCategoProds);
router.put('/categories/:id_catego', categoController.updateCatego);
router.delete('/categories/:id_catego', categoController.deleteCatego);

module.exports = router;