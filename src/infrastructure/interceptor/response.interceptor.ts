import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { convertReponseCorrect } from '../util/response.convert';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const { statusCode } = await context.switchToHttp().getResponse();

    return next
      .handle()
      .pipe(map((data) => convertReponseCorrect(statusCode, data)));
  }
}
