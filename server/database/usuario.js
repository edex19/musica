var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = Schema({
    nombre   : {type: String, require: true},
    email    : {type: String, require: true, unique: true},
    password : {type: String, require: true},
    imagen   : String
});

module.exports = mongoose.model('Usuario',usuarioSchema);