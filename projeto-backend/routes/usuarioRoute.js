const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// GET /v1/user/:id
router.get('/:id', usuarioController.getUser);

// POST /v1/user
router.post('/', userController.createUser);

// PUT /v1/user/:id
router.put('/:id', userController.updateUser);

module.exports = router;
