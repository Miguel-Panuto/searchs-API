const Connection = require('../../models/db/ConnectionModel');
const Point = require('../../models/db/PointModel');

const findPointId = require('./findPointId');

const findConnections = async (point) => {

    // Found the point connections
    const pointsConnected = await Connection.find({ fromId: await findPointId(point) }); 

    if (pointsConnected.length > 0) { // See if there is any connection
        // Parse the connections, id to the name
        const points = await Promise.all(pointsConnected.map(async ({ toId, cost }) => {
            const { name } = await Point.findById(toId);
            return {
                name,
                cost
            }
        }));
        return points;
    }
    // If not found connection will return null
    return null;
}

module.exports = findConnections;