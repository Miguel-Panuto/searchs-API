const mongoose = require('mongoose');

const HeuristicSchema = new mongoose.Schema({
    id_session: String,
    id_point: String,
    value: Number
});

module.exports = mongoose.model('Heuristic', HeuristicSchema);