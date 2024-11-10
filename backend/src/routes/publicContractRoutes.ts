import { Router } from 'express';
import { USDTController } from '../controllers/publicContractController'

const router = Router();

router.post('/usdt/read', USDTController);

export default router;
