import { ResponseDto } from '../dto/response.dto';

export function convertReponseCorrect(status_code, data: any) {
  const res = new ResponseDto();
  res.statusCode = status_code;
  res.data = data;
  return res;
}