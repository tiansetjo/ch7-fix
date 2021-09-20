const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: String,
    lastPlay : String,
    lastRank : String,
    duration :String
})

const users_game = mongoose.model('users_game', schema);

module.exports = users_game;