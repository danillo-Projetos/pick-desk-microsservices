import { AuthDto } from '../dtos/AuthDto';
import { UserDto } from '../dtos/UserDto';

interface UserServices {
  createUser: (userDto: UserDto) => void,
  findAllUsers: () => Array<UserDto>,
  findByName: (name: string) => UserDto,
  authenticate: (authDto: AuthDto) => void,
}

export { UserServices };
