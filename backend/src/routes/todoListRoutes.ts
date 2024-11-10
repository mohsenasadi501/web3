import { Router } from 'express';
import { createTaskController , readAllTaskController} from '../controllers/taskController'

const router = Router();

router.get('/readTasks', readAllTaskController);
router.post('/createTask', createTaskController);

export default router;
