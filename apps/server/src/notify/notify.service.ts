import { Injectable } from '@nestjs/common';
import { EmailService } from './emailService';
import { SmsService } from './smsService';

@Injectable()
export class NotifyService {
  constructor(
    private readonly emailService: EmailService,
    private readonly smsService: SmsService,
  ) {}
  async sendPhoneOtp(props: { phoneNumber: string; otpMsg: string }) {
    return this.smsService.sendToPhone({
      phoneNumber: props.phoneNumber,
      otpMsg: props.otpMsg,
    });
  }
  async sendEmailOtp(props: { emailAddress: string; otpMsg: string }) {
    return this.emailService.sendMail({
      emailAddress: props.emailAddress,
      template: 'OTP',
      otpMsg: props.otpMsg,
    });
  }
  async sendEmail(props: { emailAddress: string; msg: string }) {
    return this.emailService.sendMail({
      emailAddress: props.emailAddress,
      template: 'UPDATE',
      otpMsg: props.msg,
    });
  }
}
