
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then((archivo) => {
        console.log('El archivo ', archivo.rainbow, ' fue creado');
    })
    .catch('Hubo un error al crear el archivo');