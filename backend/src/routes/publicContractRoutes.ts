import { Router } from 'express';
import { USDTController, TransferWalletController, BalanceController, CreateWalletController } from '../controllers/publicContractController'

const router = Router();

router.post('/etherum/read', USDTController);
router.post('/etherum/wallet/transfer', TransferWalletController);
router.get('/etherum/balance', BalanceController);
router.get('/etherum/wallet/create', CreateWalletController);


export default router;
