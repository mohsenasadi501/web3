import { Router } from 'express';
import { USDTController, BalanceController } from '../controllers/publicContractController'

const router = Router();

router.post('/etherum/read', USDTController);
router.get('/etherum/balance', BalanceController);

export default router;
