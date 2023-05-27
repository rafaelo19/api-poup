import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Inject,
  NestInterceptor,
} from '@nestjs/common';
import { MessageException } from '../../infrastructure/shared/enum/message-exception';
import { AuthService } from '../service/auth.service';
import { isEmpty } from '@nestjs/common/utils/shared.utils';
import { Observable } from 'rxjs';

export class AuthInterceptor implements NestInterceptor {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const req = await context.switchToHttp().getRequest();
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
    const token = req.headers.authorization.replace('Bearer ', '');
    this.authService.decodeToken(token);

    return next.handle();
  }
}
