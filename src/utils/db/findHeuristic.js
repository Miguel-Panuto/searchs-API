const findPointId = require('./findPointId')
const Heuristic = require('../../models/db/HeuristicModel');

const findHeuristic = async name => {
    const pointId = await findPointId(name);
    if(!pointId) {
        return null;
    }
    const heuristic = await Heuristic.findOne({ pointId });
    if(heuristic) {
        return heuristic.value;
    }
    return null;
}

module.exports = findHeuristic;