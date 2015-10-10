/* jshint browser: false, node: true */
'use strict';

var nodeStatic = require('node-static'),
    file = new nodeStatic.Server('./public'),
    port = process.env.PORT;

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        /* Serve files! */
        file.serve(request, response);
    }).resume();
}).listen(port, function () {
    console.log('Server listening on port:', port);
});
