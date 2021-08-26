import { AuthDto } from '../../dtos/AuthDto';
import { UserDto } from '../../dtos/Usuarios/UserDto';
import { Usuario } from '../../entities/Usuario';
import { UserRepository } from '../UserRepository';

class UserRepositoryImpl implements UserRepository {
  private users: Usuario[];

  constructor() {
    this.users = [];
  }
  authenticate: (authDto: AuthDto) => void;

  public create({ email, username }: UserDto): void {
    const usuario = new Usuario();

    Object.assign(usuario, {
      name: username,
      email,
      created_at: new Date(),
    });

    this.users.push(usuario);
  }

  public findAll(): Usuario[] {
    return this.users;
  }

  public findByName(name: string): Usuario {
    const user = this.users.find((u) => u.name === name);

    if (!name || !user) {
      return null;
    }

    return user;
  }
}

export { UserRepositoryImpl };
