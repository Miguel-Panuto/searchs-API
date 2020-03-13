import { Request, Response } from 'express';
import Point from '../models/PointModel';
import Connection from '../models/ConnectionModel';

const findPointId = async (name : String) => {
    let point = await Point.findOne({ name });
    if(point) {
        return point._id;
    }
    return null;
}

export default {
    async getPoints(req: Request, res: Response) {
        return res.json(await Point.find());
    },

    async createPoint(req : Request, res : Response) {
        const { name } = req.body;

        if (await findPointId(name)) {
            return res.status(400).send({ error: 'Point just created' });
        }
        return res.json(await Point.create({ name }));
    },

    async createConnection(req : Request, res : Response) {
        const { 
            from, 
            to, 
            cost 
        } = req.body;
        let fromId = await findPointId(from);
        let toId = await findPointId(to);
        if(fromId && toId && cost) {
            return res.json(await Connection.create({ fromId, toId, cost }));
        }
        return res.status(404).send({ error: 'Not founded the points or cost' });
    }
}