const express = require('express');

const cors = require('cors');

const fileUpload = require('express-fileupload')


class Server {

    constructor(){
        this.app = express();
        this.port =process.env.PORT;
        this.imagesPath = '/api/images';

        //Meddlewares
        this.middlewares();
        //routes  de mi app
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use( cors() );

        // parseo y lectura
        this.app.use( express.json() );

        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/'
        }))

    }

    routes(){
       this.app.use( this.imagesPath, require('../routes/images'))
        
    }

    listem(){
        this.app.listen( this.port,()=>{
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }
}

module.exports = Server;