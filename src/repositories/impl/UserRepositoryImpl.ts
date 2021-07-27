import { UserDto } from '../../Dtos/UserDto';
import { UserModel } from '../../models/UserModel';
import { UserRepository } from '../UserRepository';

class UserRepositoryImpl implements UserRepository {
  private users: UserModel[];

  constructor() {
    this.users = [];
  }

  public create(userDto: UserDto): void {
    const userModel = new UserModel();

    Object.assign(userModel, {
      ...userDto,
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
