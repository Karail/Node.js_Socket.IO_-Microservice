import { Router } from 'express';
//Controllers
import marketController from './market.controller';

const router = Router();

router.post('/add', marketController.add);
router.post('/remove', marketController.remove);
router.post('/edit', marketController.edit);

export default router;