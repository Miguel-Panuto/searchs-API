import mongoose from 'mongoose';

const ConnectionSchema = new mongoose.Schema({
    fromId: String,
    toId: String,
    cost: Number
});

module.exports = mongoose.model('Connection', ConnectionSchema);