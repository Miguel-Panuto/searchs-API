const Point = require('../models/db/PointModel');
const Connection = require('../models/db/ConnectionModel');
const Heuristic = require('../models/db/HeuristicModel');
const findPointId = require('../utils/db/findPointId');

module.exports = {
    async getPoints(req, res) { // This will return all the points
        return res.json(await Point.find());
    },

    async createPoint(req, res) { // This will create a new point on database
        const { name } = req.body;

        if (await findPointId(name)) { // Will verify if there is some point with the same name on database
            return res.status(400).send({ error: 'Point just created' }); // and return an error
        }
        return res.json(await Point.create({ name }));
    },

    async createConnection(req, res) { // This will create a point connection
        const {
            from,
            to,
            cost
        } = req.body; // The cost is something theorical

        // The user pass the point name, and that will search his id
        let fromId = await findPointId(from);
        let toId = await findPointId(to);

        if (fromId && toId && cost) { // That verify if user send all that is needed, or that point ins't exist
            return res.json(await Connection.create({ fromId, toId, cost }));
        }

        // If not return a error
        return res.status(404).send({ error: 'Not founded the points or cost' });
    },

    async getConections(req, res) { // This will search the connections and parse them
        const connections = await Connection.find();

        // That map will parse de points Id to his names
        const parsedConnection = await Promise.all(connections.map(async point => {
            const fromPoint = await Point.findById(point.fromId);
            const toPoint = await Point.findById(point.toId);
            return {
                fromId: fromPoint.name,
                toId: toPoint.name,
                cost: point.cost
            }
        }));
        return res.send(parsedConnection);
    },

    async addHeuristic(req, res) {
        const { pointName, value } = req.body;
        const id_point = await findPointId(pointName);
        if (pointId) { // Just in case if the point wasn't finded
            return res.json(await Heuristic.create({ id_point, value }));
        }
        return res.status(404).send({ error: 'Point not finded' });
    },

    async getHeuristics(req, res) {
        const heuristicsTable = await Heuristic.find();
        // Parse the table
        const parseHeurist = await Promise.all(heuristicsTable.map(async el => { 
            const point = await Point.findById(el.id_point); 
            return {
                value: el.value,
                point: point.name
            }
        }));
        return res.json(parseHeurist);
    }

}