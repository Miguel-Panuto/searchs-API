class Point {
    constructor(name, cost = 0, parent = 'root') {
        this.name = name;
        this.parent = parent;
        this.cost = cost;
        this.sons = [];
        this.sonsCreated = false; // This will ensure that no more children will be raised
        this.haveSons = false; // And this to not remove more than necessary
    }

    addSons(points) {
        if (!this.sonsCreated) { 
            points.forEach(son =>
                this.sons.push(son)
            );
            this.sonsCreated = true;
            this.haveSons = true;
        }
    }

    removeSon() {
        if (this.haveSons) {
            this.sons.shift();
            if (this.sons <= 0)
                this.haveSons = false;
        }
    }
}

module.exports = Point;