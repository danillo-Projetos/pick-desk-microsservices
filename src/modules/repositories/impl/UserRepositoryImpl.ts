import { AuthDto } from '../../dtos/AuthDto';
import { UserDto } from '../../dtos/UserDto';
import { UserModel } from '../../models/UserModel';
import { UserRepository } from '../UserRepository';

class UserRepositoryImpl implements UserRepository {
  private users: UserModel[];

  constructor() {
    this.users = [];
  }
  authenticate: (authDto: AuthDto) => void;

  public create({ email, username }: UserDto): void {
    const userModel = new UserModel();

    Object.assign(userModel, {
      name: username,
      email,
      created_at: new Date(),
    });

    this.users.push(userModel);
  }

  public findAll(): UserModel[] {
    return this.users;
  }

  public findByName(name: string): UserModel {
    const user = this.users.find((u) => u.name === name);

    if (!name || !user) {
      return null;
    }

    return user;
  }
}

export { UserRepositoryImpl };
