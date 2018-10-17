var app = require('./app');
var port = 3800;

//Conexion NodeJs

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3800");
});