import {
  HttpException,
  HttpStatus,
  Inject,
  NestMiddleware,
} from '@nestjs/common';
import { MessageException} from "../../infrastructure/shared/enum/message-exception";
import { AuthService } from '../service/auth.service';

export class AuthMiddleware implements NestMiddleware {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  use(req: any, res: any, next: () => void): any {
    console.log(req.headers.authorization.search('Bearer'));

    if (
      !req.headers.authorization ||
      req.headers.authorization.search('Bearer ') == -1
    ) {
      throw new HttpException(
        MessageException.NOT_AUTHENTICATED,
        HttpStatus.UNAUTHORIZED,
      );
    }
    this.authService.decodeToken(
      req.headers.authorization.replace('Bearer ', ''),
    );
    next();
  }
}
