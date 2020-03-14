class Point {

    constructor(name, ...connections){
        this.name = name;
        if(connections.length > 0)
            this.connections = connections;
        else
            this.connections = [];
    }


}