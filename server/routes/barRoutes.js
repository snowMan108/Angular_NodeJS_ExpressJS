const express = require('express');
const router = express.Router();
const barController = require('../controllers/barController.js');

//api/bar
router.post('/', barController.createBar);
router.get('/:catego/:search/:city', barController.getBars);
router.put('/:id_bar', barController.updateBarInfo);
router.delete('/:id_bar', barController.deleteBar);

module.exports = router;