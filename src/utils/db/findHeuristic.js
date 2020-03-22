const findPointId = require('./findPointId')
const Heuristic = require('../../models/db/HeuristicModel');

const findHeuristic = async name => {
    const id_point = await findPointId(name);
    if(!id_point) {
        return null;
    }
    const heuristic = await Heuristic.findOne({ id_point });
    if(heuristic) {
        return heuristic.value;
    }
    return null;
}

module.exports = findHeuristic;