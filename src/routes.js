const express = require('express');

const PointController = require('./controllers/PointController');

const routes = express.Router();

routes.get('/list-points', PointController.getPoints);

routes.post('/create-point', PointController.createPoint);

routes.post('/create-connection', PointController.createConnection);

//Routes to pick up the data on MongoDB and makes the search
routes.get('/blind-search');

PointController.findConnections('A');

module.exports = routes;