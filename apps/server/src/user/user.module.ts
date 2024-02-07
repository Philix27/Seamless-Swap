import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './userRepository';
import { AuthService } from '@server/auth/auth.service';
import { UserRouter } from './user.router';
import { TrpcService } from '@server/trpc/trpc.service';

@Module({
  controllers: [],
  providers: [UserService, UserRouter, UserRepository, TrpcService],
})
export class UserModule {}
