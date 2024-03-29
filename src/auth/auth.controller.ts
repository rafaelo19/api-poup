import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthDto } from './dto/authDto';

@Controller({ path: 'login' })
export class AuthController {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  @Post()
  login(@Body() auth: AuthDto) {
    return this.authService.createToken(auth);
  }
}
