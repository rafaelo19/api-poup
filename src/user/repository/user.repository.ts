import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { UserRepositoryInterface } from './user.repository.interface';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async insert(user: UserEntity): Promise<UserEntity> {
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id: string): Promise<UserEntity> {
    try {
      return await this.userRepository.findOne(id);
    } catch (error) {
      console.log(error);
    }
  }
}
