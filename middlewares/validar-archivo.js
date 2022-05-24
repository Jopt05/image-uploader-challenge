const { response } = require("express");

const validarArchivoSubir = (req, res = response, next) => {

    const archivosValidos = ['png', 'jpeg', 'jpg']

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        return res.status(400).json({
            msg: 'There is no files'
        })
    }

    const splitName = req.files.archivo.name.split('.');

    if( !archivosValidos.includes( splitName[ splitName.length - 1 ].toLowerCase() ) ) {
        return res.status(400).json({
            msg: 'Not a valid extension!'
        })
    }

    next()

};

module.exports = {
    validarArchivoSubir
}