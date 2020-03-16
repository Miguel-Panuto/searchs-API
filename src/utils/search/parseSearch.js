module.exports = (point) => { // This parse the point
    let way = point.parent.split(','); // The parents are divided by ',', so I split them in an array
    way.shift(); // Remove the first, that is 'root'
    way.push(point.name); // And put the destination
    return {
        way,
        cost: point.cost
    }
}