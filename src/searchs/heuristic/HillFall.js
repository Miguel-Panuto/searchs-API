const findConnectionsHeuris = require('../../utils/db/findConnectionsHeuris');
const Point = require('../../models/classes/Point');
const findHeuristic = require('../../utils/db/findHeuristic');

const hillFall = async (start) => { // The inverse of hill climbing
    // In this method the first heuristic is important
    let actualPoint = new Point(start, 0, 'root', await findHeuristic(start));

    const returnTheSearch = () => { // The data structure that will be returned
        return {
            point: actualPoint.name,
            heuristic: actualPoint.heuristic
        }
    }

    while (true) {
        let sons = await findConnectionsHeuris(actualPoint.name);
        if (Array.isArray(sons)) { // Verifies if the point have sons
            sons = sons.map(son => {
                return {
                    name: son.name,
                    heuristic: son.heuristic
                }
            });
            // Find the minor heuristic son
            const minorHeuristic = Math.min.apply(null, sons.map(el => el.heuristic));
            // If is not minor than the father, return the actual
            if (minorHeuristic > actualPoint.heuristic) {
                return returnTheSearch();
            }

            actualPoint = sons.find(el => el.heuristic === minorHeuristic);
        } else { // if doesm't have, return the point
            return returnTheSearch();
        }
    }
}

module.exports = hillFall;