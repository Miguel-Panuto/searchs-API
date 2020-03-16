const findConnections = require('../../utils/db/findConnections');
const Point = require('../../models/classes/Point');
const parseSearch = require('../../utils/search/parseSearch');

const depthFirst = async (from, to) => {
    let stack = [from];

    while (true) {
        if (stack[0].name === to) { // Will verify if is the objective
            return parseSearch(stack[0]); // If is return the search parsed
        }
        let sons; // This will have the question sons, the point will have connection to their childrens
        if (!stack[0].sonsCreated) // And will verify if they was created before
            sons = await findConnections(stack[0].name); // If wasn't, this will search on DB
        if (Array.isArray(sons)) { // If is not and array, so is a leaf point
            const parsedSons = sons.map(son => // And parse everthing
                new Point(
                    son.name,
                    stack[0].cost + son.cost,
                    stack[0].parent + ',' + stack[0].name
                )
            );
            stack[0].addSons(parsedSons); // And add them inside the field
            stack.unshift(stack[0].sons[0]); // The first child will take the first location on the stack
        } else { // If is the leaf point
            stack[0].removeSon(); // Will remove the son, and the next will occupy the position 0
            if (stack[0].haveSons)
                stack.unshift(stack[0].sons[0]);
            else
                stack.shift(); 
                //In the last case, there is no son to visity/leaf point, the stack will remove the first element
        }
    }

}

module.exports = depthFirst;