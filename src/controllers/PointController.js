const Point = require('../models/PointModel');
const Connection = require('../models/ConnectionModel');

const findPointId = async (name) => {
    const point = await Point.findOne({ name });
    if (point) {
        return point._id;
    }
    return null;
}

const findPointConnection = async (id, cost) => {
    const point = await Point.findById(id);
    if (point) {
        return {
            name: point.name,
            cost
        };
    }
    return null;
}

module.exports = {
    async getPoints(req, res) {
        return res.json(await Point.find());
    },

    async createPoint(req, res) {
        const { name } = req.body;

        if (await findPointId(name)) {
            return res.status(400).send({ error: 'Point just created' });
        }
        return res.json(await Point.create({ name }));
    },

    async createConnection(req, res) {
        const {
            from,
            to,
            cost
        } = req.body;
        let fromId = await findPointId(from);
        let toId = await findPointId(to);
        if (fromId && toId && cost) {
            return res.json(await Connection.create({ fromId, toId, cost }));
        }
        return res.status(404).send({ error: 'Not founded the points or cost' });
    },

    async findConnections(point) {
        const pointsConnected = await Connection.find({ fromId: await findPointId(point) });

        if (pointsConnected.length > 0) {
            const points = await Promise.all(pointsConnected.map(point =>
                findPointConnection(point.toId, point.cost)
            ));
            return points;
        }

        return null;
    }
}