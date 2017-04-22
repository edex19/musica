var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cancionSchema = Schema({
    nombre     : {type: String, require: true},
    autor      : {type: String, require: true},
    tags       : {type: String, require: true},
    url        : {type: String, require: true},
    playlist : {type: Schema.Types.ObjectId, ref: 'Playlist', required: true }
});

module.exports = mongoose.model('Cancion',cancionSchema);

