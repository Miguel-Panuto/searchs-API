const Point = require('../models/db/PointModel');
const Connection = require('../models/db/ConnectionModel');
const findPointId = require('../utils/db/findPointId');

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

}