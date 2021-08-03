/* eslint-disable implicit-arrow-linebreak */
import { Router } from 'express';
import { createUser, getUsers, authenticate } from '../modules/resources/UserResources';

const userRoutes = Router();

userRoutes.post('/users', (() =>
  // #swagger.tags = ['Usuários']
  createUser
));
userRoutes.get('/users', (() =>
  // #swagger.tags = ['Usuários']
  getUsers
));

userRoutes.post('/users/auth', (() =>
  // #swagger.tags = ['Usuários']
  authenticate
));

export { userRoutes };
