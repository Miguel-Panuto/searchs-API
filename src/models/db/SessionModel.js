const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    name: String
});


module.exports = mongoose.model('session', SessionSchema);