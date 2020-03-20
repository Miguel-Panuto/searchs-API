const Point = require('../models/classes/Point');
const breadthFirst = require('../searchs/blind/BreadthFirst');
const depthFirst = require('../searchs/blind/DepthFirst');
const uniformCost = require('../searchs/blind/UniformCost');
const greedy = require('../searchs/heuristic/Greedy');

module.exports = {

    async breadthFirstSearch(req, res) {
        const { where, to } = req.body;
        const point = await breadthFirst(new Point(where), to);
        return res.json(point);
    },

    async depthFirstSearch(req, res) {
        const { where, to } = req.body;
        const point = await depthFirst(new Point(where), to);
        return res.json(point);
    },

    async uniformCostSearch(req, res) {
        const { where, to } = req.body;
        const point = await uniformCost(new Point(where), to);
        return res.json(point);
    },

    async greedySearchMethod(req, res) {
        const { where, to } = req.body;
        const point = await greedy(new Point(where), to);
        return res.json(point);
    }
}