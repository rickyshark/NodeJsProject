const express = require('express');
const mysqlConnection = require('mysql');
const bodyparser = require('body-parser');


const app = express();
app.use(bodyparser.json());


app.get('/', (req, res) => {
    res.send({ msj: 'La aplicacion esta corriendo con exito!!' })
});

app.set("port", process.env.PORT || 3000);
app.listen(process.env.PORT || 3000, () => { console.log("servidor encendido en el puerto 3000!!") });



var mysC = mysqlConnection.createConnection({

    host: 'localhost',
    user: 'root',
    password: '19291970rr',
    database: 'CINE'

});

mysC.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Conexion exitosa!!")
    }
});