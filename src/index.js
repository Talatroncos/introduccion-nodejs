var http = require ('http');



// Importamos el archivo mylog
var log = require('./modules/my-log');

var {exportacionParcial,info} = require('./modules/my-log'); // esto es una exportacion parcial

var consts = require('./utils/consts');

var firebase = require('../libs/firebase');

var {countries} = require('countries-list');
var url = require('url');
var querystring = require( 'querystring');

// Terminamos la importacion


var server = http.createServer(function(request,response){

    var parsed = url.parse(request.url);
    console.log('parsed: ', parsed);

    var pathname = parsed.pathname;

    var query = querystring.parse(parsed.query);

    console.log('query: ', query)

    if(pathname==='/'){

    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('<html><body><p>Home Page</p></body></html>');
    response.end();

    }else if(pathname==='/exit'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>Home Page</p></body></html>');
        response.end();
    }else if(pathname==='/info'){
        var result = log.info(pathname);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(result);
        response.end();
    }else if(pathname==='/country'){
        response.writeHead(200,{'Content-Type':'application/json'});
        response.write(JSON.stringify(countries[query.code]));
        response.end();
    }else if(pathname==='/error'){
        // Creamos una variable donde guardarmos el resultado de la funcion a la que estamos llamando, dicha funcion, es llamada a traves de log.error, la cual se encuentra en el archivo "my-log.js"
        var result = log.error(pathname);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(result);
        response.end();
    }else{
        response.writeHead(404,{'Content-Type':'text/html'});
        response.write('<html><body><p>Not Found</p></body></html>');
        response.end();  
    }

});

server.listen(4001);
console.log('Running on 4001');