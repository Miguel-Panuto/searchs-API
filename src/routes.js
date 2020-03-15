const express = require('express');

const PointController = require('./controllers/PointController');
const SearchsController = require('./controllers/SearchsController');

const routes = express.Router();

routes.get('/point/list', PointController.getPoints);

routes.get('/connection/list', PointController.getConections);

routes.post('/point/create', PointController.createPoint);

routes.post('/connection/create', PointController.createConnection);


//Routes to pick up the data on MongoDB and makes the search
routes.get('/search/blind/breadth-first', SearchsController.breadthFirstSearch);

module.exports = routes;