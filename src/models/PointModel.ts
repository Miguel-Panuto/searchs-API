import mongoose from 'mongoose';

const PointSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Point', PointSchema);