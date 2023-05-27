import {
  HttpException,
  HttpStatus,
  Inject,
  NestMiddleware,
} from '@nestjs/common';
import { UserService } from '../../user/service/user.service';
import { UserServiceInterface } from '../../user/service/user.service.interface';
import { decrypt } from '../../infrastructure/util/bcrypt';
import { MessageException } from '../../infrastructure/shared/enum/message-exception';
import { Request, Response } from 'express';
import { mappingObject } from '../../infrastructure/util/mapping.object';
import { AuthDto } from '../dto/authDto';

export class ValidateUserMiddleware implements NestMiddleware {
  constructor(
    @Inject(UserService) private readonly userService: UserServiceInterface,
  ) {}

  async use(req: Request, res: Response, next: () => void) {
    const auth = <AuthDto>mappingObject(req.body, new AuthDto());
    const user = await this.userService.getByLogin(auth.login);

    if (!user || !(await decrypt(auth.password, user.senha))) {
      throw new HttpException(
        MessageException.LOGIN_NOT_FOUND,
        HttpStatus.UNAUTHORIZED,
      );
    }

    next();
  }
}
