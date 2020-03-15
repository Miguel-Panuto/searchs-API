const findConnections = require('../../utils/db/findConnections');
const Point = require('../../models/classes/Point');

const breadthFirst = async (from, to) => {
    let line = [from]; // New line
    while (true) { 
        if (line[0] === null) // If there is no point on zero, there is an error
            return error;
        if (line[0].name === to) { // If is on the finish point
            let way = line[0].parent.split(','); 
            way.shift();
            way.push(line[0].name) // All this block will parse the parents
            return { // And will return the way and the full cost
                way, 
                cost: line[0].cost
            };
        }
        const sons = await findConnections(line[0].name); // But is not in the end
        if (sons.length > 0) { // This will verify if the point has dependencies
            sons.forEach(son => {
                line.push( // This will put your childs on the line 
                    new Point(
                        son.name, 
                        line[0].cost + son.cost,  // This will calculate the full cost
                        line[0].parent + ',' + line[0].name // This is basic to have the full way
                    )
                );
            });
        }
        line.shift(); // And take off the first element
    }

}

module.exports = breadthFirst;