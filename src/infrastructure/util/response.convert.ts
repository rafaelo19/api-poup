import { ResponseDto } from '../dto/response.dto';

export function convertReponseCorrect(status_code, data: any) {
  const res = new ResponseDto();
  res.status_code = status_code;
  res.data = data;
  return res;
}

export function convertResponseError(status_code, error: any) {
  const res = new ResponseDto();
  res.status_code = status_code;
  res.error = error;
  return res;
}
