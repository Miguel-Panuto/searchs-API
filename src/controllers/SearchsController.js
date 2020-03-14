const findConnections = require('../utils/db/findConnections');
const Point = require('../models/classes/Point');
const blindSearch = require('../searchs/BlindSearch');

module.exports = {
    async blindSearch(req, res) {
        const { where, to } = req.body;
        const point = await blindSearch(new Point(where), to);
        return res.json(point);
    }
}