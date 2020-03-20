const findConnections = require('../../utils/db/findConnections');
const Point = require('../../models/classes/Point');
const parseSearch = require('../../utils/search/parseSearch');

const uniformCostSearch = async (from, to) => {
    let line = [from];

    const swap = (index) => { // This is to keep the lower cost in front
        const aux = line[0];
        line[0] = line[index];
        line[index] = aux;
    }
    while(true) {
        if(line[0].name === to) {
            return parseSearch(line[0]);
        }
        const sons = await findConnections(line[0].name);
        if(Array.isArray(sons)) { // Find the sons
            sons.forEach(son => 
                line.push(new Point(
                    son.name,
                    line[0].cost + son.cost,
                    line[0].parent + ',' + line[0].name
                ))
            );
        }
        line.shift(); // Removes the first element
        const minorCost = Math.min.apply(null, line.map(el => el.cost)); // Find the minor cost inside the list
        swap(line.findIndex(el => el.cost === minorCost)); // And put him in the first position
    }
}

module.exports = uniformCostSearch;