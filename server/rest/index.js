var express = require('express');
var rest = express();

rest.use('/usuario', require('./usuarioRest'));
rest.use('/playlist', require('./playlistRest'));
rest.use('/cancion', require('./cancionRest'));

module.exports = rest;