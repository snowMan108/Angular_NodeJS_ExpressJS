const express = require('express');
const router = express.Router();
const barController = require('../controllers/barController.js');
const barCategoController = require('../controllers/barCategoController.js');

//api/bar
router.post('/', barController.createBar);
router.get('/:catego/:search/:city/:limit', barController.getBars);
router.put('/:id_bar', barController.updateBarInfo);
router.delete('/:id_bar', barController.deleteBar);

//catego routes
router.post('/categories/', barCategoController.createCatego);
router.get('/categories/:limit', barCategoController.getAllCategos);
router.put('/categories/:id_catego', barCategoController.updateCatego);
router.delete('/categories/:id_catego', barCategoController.deleteCatego);

module.exports = router;