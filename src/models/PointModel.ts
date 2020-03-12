import mongoose from 'mongoose';

const PointSchema = new mongoose.Schema({
    name: String
});

const Point = mongoose.model('Point', PointSchema);

export default Point;