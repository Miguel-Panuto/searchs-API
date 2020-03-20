const mongoose = require('mongoose');

const HeuristicSchema = new mongoose.Schema({
    pointId: String,
    value: Number
});

module.exports = mongoose.model('Heuristic', HeuristicSchema);