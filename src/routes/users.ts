import { Router } from 'express';
import { userController } from '../controllers/user';

const router: Router = Router();

router.get('/', userController.getAll);

export default router;
