import { Router } from 'express';

import PointController from './controllers/PointController';

const routes = Router();

routes.get('/', (req, res) => res.send('ola mundo'))

routes.post('/create-point', PointController.createPoint );

export default routes;