import {HttpException, HttpStatus, Inject, Injectable, PipeTransform} from "@nestjs/common";
import {UserService} from "../../user/service/user.service";
import {UserServiceInterface} from "../../user/service/user.service.interface";
import {MessageException} from "../../shared/enum/message-exception";

@Injectable()
export class FindUserPipe implements PipeTransform {
    constructor(@Inject(UserService) private readonly userService: UserServiceInterface) {
    }

    async transform(login: any, metadata: any): Promise<any> {
        console.log(await this.userService.getByLogin(login))
        if ((!await this.userService.getByLogin(login))) {
            throw new HttpException(
                MessageException.NOT_AUTHENTICATED,
                HttpStatus.NOT_FOUND,
            );
        }
        return login;
    }
}