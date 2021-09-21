const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

//api/users
router.post('/', userController.create);
// router.get('/', userController.obtenerProducts);
// router.put('/:id', userController.actualizarProduct);
// router.get('/:id', userController.obtenerProduct);
// router.delete('/:id', userController.eliminarProduct);

module.exports = router;