import { Request, Response } from 'express';
import { UserDto } from '../dtos/UserDto';
import { UserRepositoryImpl } from '../repositories/impl/UserRepositoryImpl';
import { UserServicesImpl } from '../services/impl/UserServicesImpl';

const userRepositoriesImpl = new UserRepositoryImpl();
const userServices = new UserServicesImpl(userRepositoriesImpl);

function createUser(req: Request<unknown, unknown, UserDto>, res: Response) {
  const { username, email } = req.body;
  userServices.createUser({ username, email });
  return res.status(201).send();
}

function getUsers(_, res: Response) {
  const users = userServices.findAllUsers();
  return res.status(200).json({ users });
}

function authenticate(req: Request, res: Response) {
  return res.status(200).json({ auth: 'autenticado' });
}

export { createUser, getUsers, authenticate };
