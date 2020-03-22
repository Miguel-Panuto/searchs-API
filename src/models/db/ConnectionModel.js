const mongoose = require('mongoose');

const ConnectionSchema = new mongoose.Schema({
    id_session: String,
    fromId: String,
    toId: String,
    cost: Number
});

module.exports = mongoose.model('Connection', ConnectionSchema);