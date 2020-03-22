const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    name: String,
    id_session: String
});

module.exports = mongoose.model('Point', PointSchema);