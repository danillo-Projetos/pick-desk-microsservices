import { AuthDto } from '../dtos/AuthDto';
import { UserDto } from '../dtos/UserDto';
import { UserModel } from '../models/UserModel';

interface UserRepository {
  create: (userDto: UserDto) => void,
  findAll: () => Array<UserModel>,
  findByName: (name: string) => UserModel,
  authenticate: (authDto: AuthDto) => void,
}

export { UserRepository };
