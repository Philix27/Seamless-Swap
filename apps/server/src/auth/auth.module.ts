import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRouter } from './auth.router';
import { TrpcService } from '@server/trpc/trpc.service';

@Module({
  imports: [],
  providers: [AuthService, AuthRouter, TrpcService],
  exports: [AuthService],
})
export class AuthModule {}
