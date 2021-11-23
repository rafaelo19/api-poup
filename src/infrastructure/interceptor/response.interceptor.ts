import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import {catchError, map, Observable, throwError} from 'rxjs';
import {
  convertReponseCorrect,
  convertResponseError,
} from '../util/response.convert';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const { statusCode } = await context.switchToHttp().getResponse();

    return next.handle().pipe(
      map((data) => convertReponseCorrect(statusCode, data)),

      catchError(async (error) => {
            convertResponseError(error.status, error.message)
            return throwError(error)
          }
      ),
    );
  }
}
