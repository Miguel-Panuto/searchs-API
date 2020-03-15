const Point = require('../models/classes/Point');
const breadthFirst = require('../searchs/blind/BreadthFirst');

module.exports = {
    async breadthFirstSearch(req, res) {
        const { where, to } = req.body;
        const point = await breadthFirst(new Point(where), to);
        return res.json(point);
    }
}