import { Router } from 'express';
//Controllers
import channelController from './channel.controller';

const router = Router();

router.post('/started', channelController.started);
router.post('/stopped', channelController.stopped);

router.post('/remove', channelController.remove);
router.post('/edit', channelController.edit);

router.post('/shared-channel', channelController.shared);

export default router;