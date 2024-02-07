import { Injectable } from '@nestjs/common';

@Injectable()
export class SmsService {
  async sendToPhone(props: { phoneNumber: string; otpMsg: string }) {}
}
