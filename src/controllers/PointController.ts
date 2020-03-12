import { Request, Response } from 'express';
import Point from '../models/PointModel';

export default {
    async createPoint(req : Request, res : Response) {
        // console.log(req);

        return res.json(req);
    }
}