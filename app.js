const { argv } = require('./config/yargs');
const colors = require('colors');
const { crearArchivo, listar } = require('./multiplicar/multiplicar');

let comando=argv._[0];

if (argv._.find( comando => comando==="crear" )){
    crearArchivo(argv.base,argv.limite)
    .then( archivo => console.log(`Archivo creado: ${ archivo.red }`))
    .catch( err => console.log(err));
} else if (argv._.find( comando => comando==="listar" )){
    listar(argv.base,argv.limite)
} else {
    console.log("Comando no reconocido!");
}

//console.log(module);
//console.log(process);
//const base = process.argv[2].split('=')[1];
//console.log(process.argv);

