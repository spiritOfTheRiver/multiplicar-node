// requires
const fs = require('fs');
const colors = require('colors');

let crearArchivo = async (base,limite) => {
    if ( !Number(base) ){
        throw `La base introducida no es un numero "${base}"`;
    }
    if ( !Number(limite) ){
        throw `El limite introducido no es un numero "${limite}"`;
    }
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data+=`${base} * ${i} = ${i*base}\n`;    
    }
    const archivo=`tabla-${base}-al-${limite}.txt`; 
    fs.writeFile(`tablas/${archivo}`, 
        data, 
        (err) => {
            if (err) throw err;
        });
    return archivo;
};

let listar = async (base,limite) => {

    console.log("============================".green);
    console.log(`Tabls de ${base} `.green);
    console.log("============================".green);

    colors
    if ( !Number(base) ){
        throw 'El valor introducido no es un numero';
    }
    let data = '';
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${i*base}`);
    }
};


module.exports = {
    crearArchivo,
    listar
}