const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : String,
    skor : String,
    rank : String
})

const users_history = mongoose.model('users_history', schema);

module.exports = users_history;