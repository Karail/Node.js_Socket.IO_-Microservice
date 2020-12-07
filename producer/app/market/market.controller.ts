import { Request, Response } from "express";
//Serivces
import marketService from './market.service';

class MarketController {
    public add(req: any, res: Response) {
        try {
            const { channels } = req.body;

            if (channels.lenght < 0) {
                return res.status(400).send({ message: 'count channels 0' });
            }
            const result = marketService.add(req.io, channels)
            res.send(result);
        } catch (ex) {
            res.status(500).send({ message: ex.message });
        }
    }
    public remove(req: any, res: Response) {
        try {
            const { channels } = req.body;

            if (channels.lenght < 0) {
                return res.status(400).send({ message: 'count channels 0' });
            }
            const result = marketService.remove(req.io, channels)
            res.send(result);
        } catch (ex) {
            res.status(500).send({ message: ex.message });
        }
    }
    public edit(req: any, res: Response) {
        try {
            const { channels } = req.body;

            if (channels.lenght < 0) {
                return res.status(400).send({ message: 'count channels 0' });
            }
            const result = marketService.edit(req.io, channels)
            res.send(result);
        } catch (ex) {
            res.status(500).send({ message: ex.message });
        }
    }
}
export default new MarketController();