import { UserEntity } from '../entity/user.entity';

export interface UserRepositoryInterface {
  insert(user: UserEntity): Promise<UserEntity>;

  getById(id: string): Promise<UserEntity>;
}
