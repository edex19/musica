var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playlistSchema = Schema({
    nombre   : {type: String, require: true}
});

module.exports = mongoose.model('Playlist',playlistSchema);