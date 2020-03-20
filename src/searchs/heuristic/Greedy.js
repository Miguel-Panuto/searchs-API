const findConnectionsHeuris = require('../../utils/db/findConnectionsHeuris');
const Point = require('../../models/classes/Point');
const parseSearch = require('../../utils/search/parseSearch');

const greedy = async (from, to) => {
    let line = [from];

    const swap = (index) => { // This is to keep the lower cost in front
        const aux = line[0];
        line[0] = line[index];
        line[index] = aux;
    }

    while (true) {
        if(line[0].name === to) {
            return parseSearch(line[0]);
        }
        const sons = await findConnectionsHeuris(line[0].name);
        if (Array.isArray(sons)) {
            sons.forEach(son => 
                line.push(new Point(
                    son.name,
                    line[0].cost + son.cost,
                    line[0].parent + ',' + line[0].name,
                    son.heuristic
                ))
            );
        }
        line.shift(); // Remove the first in the line
        const minorHeuristic = Math.min.apply(null, line.map(el => el.heuristic)); // Find the minor Heuristic
        swap(line.findIndex(el => el.heuristic === minorHeuristic)); // Change him to first
    }
}

module.exports = greedy;