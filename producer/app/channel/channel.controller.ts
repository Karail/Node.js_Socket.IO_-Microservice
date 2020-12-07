import { Request, Response } from "express";
//Serivces
import channelService from "./channel.service";

class ChannelController {

    public started(req: any, res: Response) {
        try {
            const { channels } = req.body;

            if (channels.lenght < 0) {
                return res.status(400).send({ message: 'count channels 0' });
            }
            const result = channelService.started(req.io, channels);
            res.send(result);
        } catch (ex) {
            res.status(500).send({ message: ex.message });
        }
    }
    public stopped(req: any, res: Response) {
        try {
            const { channels } = req.body;

            if (channels.lenght < 0) {
                return res.status(400).send({ message: 'count channels 0' });
            }
            const result = channelService.stopped(req.io, channels);
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
            const result = channelService.remove(req.io, channels);
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
            const result = channelService.edit(req.io, channels);
            res.send(result);
        } catch (ex) {
            res.status(500).send({ message: ex.message });
        }
    }
    public shared(req: any, res: Response) {
        try {
            const { userId } = req.body;

            if (!userId) {
                return res.status(400).send({ message: 'userId is null' });
            }
            const result = channelService.shared(req.io, userId);
            res.send(result);
        } catch (ex) {
            res.status(500).send({ message: ex.message });
        }
    }
}
export default new ChannelController();