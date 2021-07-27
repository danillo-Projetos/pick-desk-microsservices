import { UserDto } from '../Dtos/UserDto';
import { UserRepository } from '../repositories/UserRepository';

class UserService {
  constructor(private userRepository: UserRepository) {}

  public createUser({ name, email }: UserDto): void {
    const userExists = !!this.userRepository.findByName(name);

    if (userExists) {
      throw new Error('User already exists!');
    }

    this.userRepository.create({ name, email });
  }

  public findAllUsers() {
    const users = this.userRepository.findAll();
    return users;
  }
}

export { UserService };
