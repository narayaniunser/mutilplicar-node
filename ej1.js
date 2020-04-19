

//destrecturación 
const {crearArchivo, listarArchivo} = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv;
const colors = require('colors/safe'); 



//console.log('Limite',argv.limite);

let command = argv._[0]; 

switch (command) {
    case 'listar': 
        listarArchivo(argv.base,argv.limite);
        
    break;

    case 'crear': 
        //promesa
        crearArchivo(argv.base,argv.limite)
            .then(archivo => console.log(`Archivo creado`,colors.magenta(archivo)))
            .catch (e=> console.log(e)); 
    break;

    default: 
        console.log(`Comando ${command} inválido`);
}


// let parametro = argv[2]; 
// let base = parametro.split('=')[1]; 



