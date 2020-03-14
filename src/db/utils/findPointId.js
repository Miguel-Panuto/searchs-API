const Point = require('../../models/PointModel');

const findPointId = async (name) => {
    const point = await Point.findOne({ name });
    if (point) {
        return point._id;
    }
    return null;
}

module.exports = findPointId;