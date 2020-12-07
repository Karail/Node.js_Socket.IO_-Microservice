import { Router } from 'express';
//Controllers
import timeController from './time.controller';

const router = Router();

router.post('/add', timeController.add);
router.post('/remove', timeController.remove);
router.post('/edit', timeController.edit);

export default router;