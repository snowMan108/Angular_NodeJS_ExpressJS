const express = require('express');
const router = express.Router();
const categoController = require('../controllers/categoController.js');

//rutas categorias
router.post('/', categoController.createCatego);
router.get('/:id_bar', categoController.getBarCatego);
router.get('/prods/:id_catego', categoController.getAllCategoProds);
router.put('/:id_catego', categoController.updateCatego);
router.delete('/:id_catego', categoController.deleteCatego);

module.exports = router;