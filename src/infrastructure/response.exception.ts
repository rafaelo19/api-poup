import {HttpException} from "@nestjs/common";

export class ResponseException extends HttpException {
    status_code: number
    error: string

    constructor(status_code: number, error:string) {
        super(error, status_code)
        this.status_code = status_code
        this.error = error
    }

}