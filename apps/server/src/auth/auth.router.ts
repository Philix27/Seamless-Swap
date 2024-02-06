import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { AuthService } from './auth.service';
import { TrpcService } from '@server/trpc/trpc.service';

@Injectable()
export class AuthRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly service: AuthService,
  ) {}

  router = this.trpc.router({
    verifyPhone: this.trpc.procedure
      .input(z.object({ name: z.string().optional() }))
      .query(({ input }) => {
        return this.service.verifyEmail();
      }),
    verifyEmail: this.trpc.procedure
      .input(z.object({ name: z.string().optional() }))
      .query(({ input }) => {
        return this.service.verifyPhone();
      }),
  });
}
