const findConnections = require('../utils/db/findConnections');
const Point = require('../models/classes/Point');

const blindSearch = async (from, to) => {
    let line = [from];
    while (true) {
        if (line[0] === null)
            return error;
        if (line[0].name === to) {
            return line[0];
        }
        const sons = await findConnections(line[0].name);
        if (sons.length > 0) {
            sons.forEach(son => {
                line.push(new Point(son.name, son.cost, line[0]));
            });
        }
        line.shift();
    }

}

module.exports = blindSearch;