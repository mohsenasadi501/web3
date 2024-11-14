import { Router } from 'express';
import { USDTController, BalanceController, CreateWalletController } from '../controllers/publicContractController'

const router = Router();

router.post('/etherum/read', USDTController);
router.get('/etherum/balance', BalanceController);
router.get('/etherum/wallet/create', CreateWalletController);


export default router;
