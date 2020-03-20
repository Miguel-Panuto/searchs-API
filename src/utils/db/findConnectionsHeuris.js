const Connection = require('../../models/db/ConnectionModel');
const Point = require('../../models/db/PointModel');
const Heuristic = require('../../models/db/HeuristicModel');

const findPointId = require('./findPointId');

const findConnectionsHeuris = async (point) => {

    // Found the point connections
    const pointsConnected = await Connection.find({ fromId: await findPointId(point) }); 

    if (pointsConnected.length > 0) { // See if there is any connection
        // Parse the connections, id to the name
        const points = await Promise.all(pointsConnected.map(async ({ toId, cost }) => {
            const { name } = await Point.findById(toId);
            const heuristic = await Heuristic.find({ pointId: toId });
            return {
                name,
                cost,
                heuristic: heuristic[0].value
            }
        }));
        return points;
    }
    // If not found connection will return null
    return null;
}

module.exports = findConnectionsHeuris;