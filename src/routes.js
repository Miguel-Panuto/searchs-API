const express = require('express');

const PointController = require('./controllers/PointController');
const SearchsController = require('./controllers/SearchsController');

const routes = express.Router();

routes.get('/point/list', PointController.getPoints);

routes.get('/connection/list', PointController.getConections);

routes.get('/heuristic/list', PointController.getHeuristics);

routes.post('/point/create', PointController.createPoint);

routes.post('/connection/create', PointController.createConnection);

routes.post('/heuristic/add', PointController.addHeuristic);


//Routes to pick up the data on MongoDB and makes the search
routes.get('/search/blind/breadth-first', SearchsController.breadthFirstSearch);

routes.get('/search/blind/depth-first', SearchsController.depthFirstSearch);

routes.get('/search/blind/uniform-cost', SearchsController.uniformCostSearch);

routes.get('/search/heuristic/greedy', SearchsController.greedySearch);

routes.get('/search/heuristic/a-star', SearchsController.aStarSearch);

module.exports = routes;