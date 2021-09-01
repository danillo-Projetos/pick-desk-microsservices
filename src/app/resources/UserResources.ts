import HttpStatus, { getReasonPhrase } from 'http-status-codes';
import { Request, Response } from 'express';
import ldapjs, { ClientOptions } from 'ldapjs';
import { UserDto } from '../dtos/Usuarios/UserDto';
import { UserRepositoryImpl } from '../repositories/impl/UserRepositoryImpl';
import { UserServicesImpl } from '../services/impl/UserServicesImpl';
import { ResponseHandler } from '../handlers/responses/ResponseHandler';

const userRepositoriesImpl = new UserRepositoryImpl();
const userServices = new UserServicesImpl(userRepositoriesImpl);

function createUser(req: Request<unknown, unknown, UserDto>, res: Response) {
  const { username, email } = req.body;
  userServices.createUser({ username, email });
  return res.status(HttpStatus.CREATED).send();
}

function getUsers(_, res: Response<ResponseHandler<Array<UserDto>>>) {
  const users = userServices.findAllUsers();
  return res.status(HttpStatus.OK).json({
    code: getReasonPhrase(HttpStatus.OK),
    statusCode: HttpStatus.OK,
    data: users,
  });
}

function authenticate(req: Request, res: Response) {
  const clientOptions: ClientOptions = {
    url: 'ldap://192.168.30.1:389',
  };
  const client = ldapjs.createClient(clientOptions);
  return res.status(HttpStatus.OK).json({ auth: 'autenticado' });
}

export { createUser, getUsers, authenticate };
