import { Router } from 'express';
import { creatTaskController } from '../controllers/todoListController'

const router = Router();

router.post('/creatTask', creatTaskController);

export default router;
