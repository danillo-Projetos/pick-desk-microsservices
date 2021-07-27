import { UserDto } from '../Dtos/UserDto';
import { UserModel } from '../models/UserModel';

interface UserRepository {
  create: (userDto: UserDto) => void,
  findAll: () => Array<UserModel>,
  findByName: (name: string) => UserModel
}

export { UserRepository };
