import { UserEntity } from '../entity/user.entity';

export interface UserServiceInterface {
  insert(user: UserEntity): Promise<UserEntity>;

  getById(id: string): Promise<UserEntity>;

  getByLogin(id: string): Promise<UserEntity>;
}
