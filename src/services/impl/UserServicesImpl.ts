import { AuthDto } from '../../dtos/AuthDto';
import { UserDto } from '../../dtos/UserDto';
import { UserRepository } from '../../repositories/UserRepository';
import { UserServices } from '../UserServices';

class UserServicesImpl implements UserServices {
  constructor(private userRepository: UserRepository) {}

  public createUser({ username, email }: UserDto): void {
    const userExists = !!this.userRepository.findByName(username);

    if (userExists) {
      throw new Error('User already exists!');
    }

    this.userRepository.create({ username, email });
  }

  public findAllUsers() {
    const usersInRepository = this.userRepository.findAll();
    return usersInRepository.map(({ name, email }): UserDto => ({
      username: name,
      email,
    }));
  }

  public authenticate(authDto: AuthDto) {

  }

  public findByName(name: string): UserDto {
    const { name: nameUser, email } = this.userRepository.findByName(name);
    return {
      username: nameUser,
      email,
    };
  }
}

export { UserServicesImpl };
