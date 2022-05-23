const { Router } = require( 'express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarArchivoSubir } = require('../middlewares/validar-archivo');

const {
    imagesPost
} = require('../controllers/images');

const router = new Router();

    router.post('/', [
        validarArchivoSubir,
        validarCampos
    ], imagesPost);



module.exports = router;