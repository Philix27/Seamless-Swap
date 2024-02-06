import { Injectable } from '@nestjs/common';
import { initTRPC } from '@trpc/server';

@Injectable()
export class AuthService {
  async verifyEmail() {}
  async verifyPhone() {}
}
