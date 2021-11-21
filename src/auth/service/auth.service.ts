import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthDto } from '../dto/authDto';
import { mappingObject } from '../../util/mapping.object';
import { PayloadToken } from '../dto/payload.token';
import { MessageException } from '../../shared/enum/message-exception';
require('dotenv/config');

@Injectable()
export class AuthService {
  private jwt = require('jsonwebtoken');

  createToken(auth: AuthDto): string {
    return this.jwt.sign(
      this.createPayload(auth),
      Buffer.from(process.env.TOKEN_PRIVATE_KEY).toString('base64'),
      {
        algorithm: process.env.TOKEN_ALGORITHM,
      },
    );
  }

  createPayload(auth: AuthDto) {
    return {
      exp: Math.floor(Date.now() / 1000) + Number(process.env.TOKEN_EXP),
      data: {
        user: auth.login,
      },
    };
  }

  decodeToken(token: string): PayloadToken {
    try {
      return mappingObject(
        this.jwt.verify(
          token,
          Buffer.from(process.env.TOKEN_PRIVATE_KEY).toString('base64'),
        ),
        new PayloadToken(),
      );
    } catch (error) {
      throw new HttpException(
        MessageException.NOT_AUTHENTICATED,
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
