import { Module } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { TrpcRouter } from './trpc.router';
import { AuthService } from '@server/auth/auth.service';
import { AuthRouter } from '@server/auth/auth.router';
import { UserRouter } from '@server/user/user.router';
import { UserService } from '@server/user/user.service';
import { UserModule } from '@server/user/user.module';

@Module({
  imports: [UserModule],
  providers: [
    TrpcService,
    TrpcRouter,
    AuthService,
    AuthRouter,
    UserRouter,
    UserService,
  ],
  exports: [TrpcRouter],
})
export class TrpcModule {}
