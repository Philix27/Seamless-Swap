import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  async sendMail(props: {
    emailAddress: string;
    otpMsg: string;
    template: 'OTP' | 'WELCOME' | 'UPDATE' | 'MARKET';
  }) {}
}
