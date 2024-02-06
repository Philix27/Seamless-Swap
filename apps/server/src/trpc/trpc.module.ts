import { Module } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { TrpcRouter } from './trpc.router';
import { AuthModule } from '@server/auth/auth.module';
import { AuthService } from '@server/auth/auth.service';
import { AuthRouter } from '@server/auth/auth.router';

@Module({
  imports: [],
  providers: [TrpcService, TrpcRouter, AuthService, AuthRouter],
})
export class TrpcModule {}
