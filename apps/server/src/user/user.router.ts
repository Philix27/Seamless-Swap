import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { TrpcService } from '@server/trpc/trpc.service';
import { UserService } from './user.service';

@Injectable()
export class UserRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly service: UserService,
  ) {}

  router = this.trpc.router({
    findOne: this.trpc.procedure
      .input(z.object({ name: z.string().optional() }))
      .query(({ input }) => {
        return this.service.findOne({});
      }),
    findMany: this.trpc.procedure
      .input(z.object({ name: z.string().optional() }))
      .query(({ input }) => {
        return this.service.findMany({});
      }),
    update: this.trpc.procedure
      .input(z.object({ name: z.string().optional() }))
      .query(({ input }) => {
        return this.service.update({});
      }),
    remove: this.trpc.procedure
      .input(z.object({ id: z.string() }))
      .query(({ input }) => {
        return this.service.remove({ id: input.id });
      }),
  });
}
