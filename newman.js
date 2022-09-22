//Ejecutar con "Node newman run"
const { error } = require('console');
const newman = require('newman');
const { Collection } = require('postman-collection');

newman.run({
    collection: require('./Collections/tutorial.postman_collection.json'),
    // environment: './environment/nombre del environment o archivo
    // globals: './.variables_globales/nombre del archivo',
    interactionCount: 2,
    reporters: [ 'cli' , 'htmlextra'],
    reporter:{
        htmlextra:{
             export: 'Report/reports.html',
             logs: true,
             //skipHeaders: ['Server', 'Authorization', 'X-Powered-By'],
             skipSensitiveData: false,
             title: 'Report of web services TEST',
             darkTheme: true, //tema 
             showOnlyFails: false,
             browserTitle: 'Reports TEST'
        }
    }

}).on('start', function (err, args){
    console.log('[NEWMAN] Running collection...');
}).on('done', function (err, summary) {
    if(err || summary.err){
        console.error('[NEWMAN] Collection run encountered an error.');
    }else{
        console.log('[NEWMAN] Colletion run completed.');
    }
});

//Como configurar el proxy
//ser HTTP PROXY="Ruta del proxy" && newman run "ruta donde esta la collection"