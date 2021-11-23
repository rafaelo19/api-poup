import { Expose } from 'class-transformer';

export class ResponseDto {
  @Expose({ name: 'statusCode' })
  statusCode: number;

  @Expose({ name: 'data' })
  data: any;
}
