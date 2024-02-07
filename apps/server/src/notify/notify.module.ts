import { Module } from '@nestjs/common';
import { NotifyService } from './notify.service';
import { TrpcService } from '@server/trpc/trpc.service';
import { EmailService } from './emailService';
import { SmsService } from './smsService';

@Module({
  imports: [],
  providers: [NotifyService, TrpcService, EmailService, SmsService],
  exports: [NotifyService],
})
export class NotifyModule {}
