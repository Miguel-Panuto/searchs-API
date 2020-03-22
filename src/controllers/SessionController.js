const Session = require('../models/db/SessionModel');
const Point = require('../models/db/PointModel');
const Connection = require('../models/db/ConnectionModel');
const Heuristic = require('../models/db/HeuristicModel');

module.exports = {
    async createSession(req, res) {
        // Receive the name request
        const { name } = req.body;
        // Create on DB the session
        const session = await Session.create({ name });
        // Respond with the session id
        return res.send(session._id);
    },

    async destroySession(req, res) {
        // Picks the id from the request
        const id = req.header('id');
        // Delete everthing with that id
        Session.findByIdAndDelete(id);
        const sessionId = { id_session: id }
        Point.deleteMany(sessionId);
        Connection.deleteMany(sessionId);
        Heuristic.deleteMany(sessionId);
        // Respond with an sucess message
        return res.send('Sucess');
    }
}