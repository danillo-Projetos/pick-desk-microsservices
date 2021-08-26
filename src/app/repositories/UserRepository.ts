import { AuthDto } from '../dtos/AuthDto';
import { UserDto } from '../dtos/Usuarios/UserDto';
import { Usuario } from '../entities/Usuario';

interface UserRepository {
  create: (userDto: UserDto) => void,
  findAll: () => Array<Usuario>,
  findByName: (name: string) => Usuario,
  authenticate: (authDto: AuthDto) => void,
}

export { UserRepository };
