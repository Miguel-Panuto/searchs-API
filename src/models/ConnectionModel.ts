import mongoose from 'mongoose';

const ConnectionSchema = new mongoose.Schema({
    fromId: String,
    toId: String,
    cost: Number
});

export default mongoose.model('Connection', ConnectionSchema);