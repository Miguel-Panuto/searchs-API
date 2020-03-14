const Point = require('../models/db/PointModel');
const Connection = require('../models/db/ConnectionModel');
const findPointId = require('../utils/db/findPointId');

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

module.exports = {
    async blindSearch(req, res) {
        const { name } = req.body;
        const connections = await findConnections(name);
        if(connections) {
            return res.json(connections);
        }
        return res.send('No points connections');
    }
}