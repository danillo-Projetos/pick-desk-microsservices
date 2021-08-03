import { Router } from 'express';
import { swaggerServe, swaggerSetup } from '../configurations/SwaggerConfiguration';
import { userRoutes } from './users.routes';

const router = Router();

router.use('/', (() => userRoutes));
router.use('/api-docs', swaggerServe, swaggerSetup);
export { router };
