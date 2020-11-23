import { Request, Response } from "express";
//Serivces
import timeService from './time.service';

class TimeController {
    public async add(req: any, res: Response) {
        try {
            const { channels } = req.body;

            if (channels.lenght < 0) {
                return res.status(400).send({ message: 'count channels 0' });
            }
            const result = timeService.add(req.io, channels)
            res.send(result);
        } catch (ex) {
            res.status(500).send({ message: ex.message });
        }
    }
    public async remove(req: any, res: Response) {
        try {
            const { channels } = req.body;

            if (channels.lenght < 0) {
                return res.status(400).send({ message: 'count channels 0' });
            }
            const result = timeService.remove(req.io, channels)
            res.send(result);
        } catch (ex) {
            res.status(500).send({ message: ex.message });
        }
    }
    public async edit(req: any, res: Response) {
        try {
            const { channels } = req.body;

            if (channels.lenght < 0) {
                return res.status(400).send({ message: 'count channels 0' });
            }
            const result = timeService.edit(req.io, channels)
            res.send(result);
        } catch (ex) {
            res.status(500).send({ message: ex.message });
        }
    }
}
export default new TimeController();