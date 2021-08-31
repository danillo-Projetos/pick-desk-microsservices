/* eslint-disable implicit-arrow-linebreak */
import { Router } from 'express';
import { createUser, getUsers, authenticate } from '../app/resources/UserResources';

const userRoutes = Router();

userRoutes.post('/', (() =>
  // #swagger.tags = ['Usuários']
  createUser
));
userRoutes.get('/', (() =>
  // #swagger.tags = ['Usuários']
  getUsers
));

userRoutes.post('/auth', (() =>
  // #swagger.tags = ['Usuários']
  authenticate
));

export { userRoutes };
