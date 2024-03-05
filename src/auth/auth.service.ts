import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { message: 'SIGN UP' };
  }

  signin() {
    return { message: 'SIGN IN' };
  }
}
