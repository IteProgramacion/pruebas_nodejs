const express = require('express');
const db = require("./db");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.db().then((r) => console.log('Conexion exitosa ' + r));
        this.middlewares();
        this.routes();
    }
    async db(){
        try {
            await db.authenticate();
        } catch (e) {
            throw Error('Error en DB ' + e);
        }
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('api/test', require('./routes/user_route'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;