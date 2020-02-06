function info(pText){
    console.log('Info: ',pText);
    return pText;
}

function error(pText) { 
    console.log('Error: ',pText);
    return pText;
}

// De esta manera, exportamos solo parcialmente esta funcion, es recomendable que cuando la exportamos, le pongamos el mismo nombre que tiene en origen
module.exports.exportacionParcial=  function exportacionParcial(pText) {
    console.log('exportacion parcial')
    return pText;
}
// module.exports.error = error; Otra forma de definir una exportacion parcial como arriba


// EXPORTACION GLOBAL - Exportamos estas dos funciones de esta manera para que se puedan usar en cualquier archivo
module.exports = { info,error};

