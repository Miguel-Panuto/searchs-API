class Point {
    constructor(name, cost = 0, parent = 'root'){
        this.name = name;
        this.parent = parent;
        this.cost = cost;
    }
}

module.exports = Point;