import { Router } from 'express';
import { createUser, getUsers, authenticate } from '../resources/UserResources';

const userRoutes = Router();
userRoutes.post('/', createUser);
userRoutes.post('/auth', authenticate);
userRoutes.get('/', getUsers);

export { userRoutes };
