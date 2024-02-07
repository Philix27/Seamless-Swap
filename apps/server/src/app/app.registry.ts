import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@server/auth/auth.module';
import { NotifyModule } from '@server/notify/notify.module';
import { TrpcModule } from '@server/trpc/trpc.module';
import { UserModule } from '@server/user/user.module';

export const AppModuleRegistry = [
  ConfigModule.forRoot(),
  TrpcModule,
  AuthModule,
  NotifyModule,
  UserModule,
];
