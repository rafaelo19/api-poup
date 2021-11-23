import {
  HttpException,
  HttpStatus,
  Inject,
  NestMiddleware,
} from '@nestjs/common';
import { MessageException } from '../../infrastructure/shared/enum/message-exception';
import { AuthService } from '../service/auth.service';
import { isEmpty } from '@nestjs/common/utils/shared.utils';

export class AuthMiddleware implements NestMiddleware {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  use(req: any, res: any, next: () => void): any {
    if (!req.headers.authorization) {
      throw new HttpException(
        MessageException.NOT_AUTHENTICATED,
        HttpStatus.UNAUTHORIZED,
      );
    }
    if (!isEmpty(req.headers.authorization)) {
      if (req.headers.authorization.search('Bearer ') == -1) {
        throw new HttpException(
          MessageException.NOT_AUTHENTICATED,
          HttpStatus.UNAUTHORIZED,
        );
      }
    }
    this.authService.decodeToken(
      req.headers.authorization.replace('Bearer ', ''),
    );
    next();
  }
}
