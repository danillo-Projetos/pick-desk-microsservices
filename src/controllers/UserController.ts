import { Request, Response, Router } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import { UserService } from '../services/UserServices';

interface RequestUser {
  name: string;
  email: string;
}

interface ApiResponse<T> {
  errors?: Array<string>;
  data?: T;
}

const usersRoutes = Router();
const userRepository = new UserRepository();

usersRoutes.post('/', (req: Request<unknown, unknown, RequestUser>, res: Response) => {
  const { name, email } = req.body;
  const userServices = new UserService(userRepository);
  userServices.createUser({ name, email });

  return res.status(201).send();
});

usersRoutes.get('/', (_, res: Response) => {
  const userServices = new UserService(userRepository);
  const users = userServices.findAllUsers();
  return res.status(200).json({ users });
});

export { usersRoutes };
