import { Injectable } from '@nestjs/common';
import { initTRPC } from '@trpc/server';

@Injectable()
export class AuthService {
  async verifyEmailAndPassword() {}
  async createAccount() {}
  async resetPassword() {}
  async verifyEmail() {}
  async verifyPhone() {}
}
