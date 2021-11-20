import {Body, Controller, Inject, Param, Post} from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthDto } from './dto/authDto';
import {FindUserPipe} from "./pipe/find.user.pipe";

@Controller({ path: 'login' })
export class AuthController {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  @Post()
  login(@Body("login",FindUserPipe) auth: AuthDto) {
    const token = this.authService.createToken(auth);
    const a = this.authService.decodeToken(token);
    return token;
  }
}
