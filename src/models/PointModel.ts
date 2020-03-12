import mongoose from 'mongoose';

const PointSchema = new mongoose.Schema({
    name: String
});

export default mongoose.model('Point', PointSchema);