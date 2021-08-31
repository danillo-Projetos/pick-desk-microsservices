import { Router } from 'express';
import { swaggerServe, swaggerSetup } from '../configurations/SwaggerConfiguration';
import { userRoutes } from './users.routes';

const router = Router();

router.use('/usuarios', () => userRoutes);
router.use('/unidades', () => );
router.get('/health', ((req, res) => res.status(200).json({ status: 'ok' })));
router.use('/api-docs', swaggerServe, swaggerSetup);
export { router };
