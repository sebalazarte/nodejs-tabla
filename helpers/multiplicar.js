const fs = require('fs');
const colors = require('colors');

// const crearArchivo = (base) => {

//     console.log('===================');
//     console.log('Tabla del ', base);
//     console.log('===================');

//     let salida = '';
//     for (let index = 1; index <= 10; index++) {
//         salida += `${base} x ${index} = ${base * index}\n`;
//     }

//     console.log(salida);
//     fs.writeFileSync(`tabla-${base}-txt`, salida);

// }

//crear archivos usando promise
// const crearArchivo = (base) => {

//     return new Promise((resolve, reject) => {
//         console.log('===================');
//         console.log('Tabla del ', base);
//         console.log('===================');

//         let salida = '';
//         for (let index = 1; index <= 10; index++) {
//             salida += `${base} x ${index} = ${base * index}\n`;
//         }

//         let archivo = `tabla-${base}-txt`;
//         console.log(salida);
//         try {

//             fs.writeFileSync(archivo, salida);
//             resolve(archivo);
//         } catch (error) {
//             reject(error);
//         }
//     });

const crearArchivo = async (base, listar, hasta) => {
    try {
        let salida = '';
        let consola = '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;
            consola += `${colors.blue(base)} ${'x'.red} ${colors.blue(index)} ${'='.red} ${colors.blue(base * index)}\n`;
        }

        let archivo = `tabla-${base}-txt`;

        if(listar){
            console.log('==================='.green);
            console.log('Tabla del '.green, colors.red(base));
            console.log('==================='.green);
            console.log(salida);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/${archivo}`, salida);
        return archivo;
    } catch (error) {
        throw error;
    }
}



// fs.writeFile(`tabla-${base}-txt`, salida, (err) => {
//     if(err) throw err;
//     console.log("archivo creado");
// })

module.exports = {
    crearArchivo
}