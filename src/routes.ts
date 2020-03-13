import { Router } from 'express';

import PointController from './controllers/PointController';

const routes = Router();

routes.get('/list-points', PointController.getPoints);

routes.post('/create-point', PointController.createPoint);

routes.post('/create-connection', PointController.createConnection);

export default routes;