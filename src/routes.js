const express = require('express');

const PointController = require('./controllers/PointController');
const SearchsController = require('./controllers/SearchsController');

const routes = express.Router();

routes.get('/list-points', PointController.getPoints);

routes.get('/list-connections', PointController.getConections);

routes.post('/create-point', PointController.createPoint);

routes.post('/create-connection', PointController.createConnection);


//Routes to pick up the data on MongoDB and makes the search
routes.get('/blind-search', SearchsController.blindSearch);

module.exports = routes;