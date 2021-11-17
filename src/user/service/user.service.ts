import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { UserEntity } from '../entity/user.entity';
import { UserServiceInterface } from './user.service.interface';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}

  insert(user: UserEntity): Promise<UserEntity> {
    return this.userRepository.insert(user);
  }

  getById(id: string): Promise<UserEntity> {
    return this.userRepository.getById(id);
  }
}
