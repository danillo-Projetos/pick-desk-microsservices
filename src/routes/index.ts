import { Router } from 'express';
import { swaggerServe, swaggerSetup } from '../configurations/SwaggerConfiguration';
import { unidadeRouter } from './unidades.routes';
import { userRoutes } from './users.routes';

const router = Router();

router.use('/usuarios', userRoutes);
router.use('/unidades', unidadeRouter);
router.use('/api-docs', swaggerServe, swaggerSetup);
router.get('/health', ((_, res) => res.status(200).json({ status: 'ok' })));

export { router };
