import { INestApplication, Injectable } from '@nestjs/common';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import { TrpcService } from './trpc.service';
import { AuthService } from '@server/auth/auth.service';
import { AuthRouter } from '@server/auth/auth.router';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly auth: AuthService,
    private readonly authRoutes: AuthRouter,
  ) {}

  appRouter = this.trpc.router({
    auth: this.authRoutes.router,
    hello: this.trpc.procedure
      .input(z.object({ name: z.string().optional() }))
      .query(({ input }) => {
        return `Hello ${input.name ? input.name : `Bimbo, oyemi`}`;
      }),
    hey: this.trpc.procedure
      .input(z.object({ name: z.string().optional() }))
      .query(({ input }) => {
        return `Hello ${input.name ? input.name : `Bimbo, oyemi`}`;
      }),

    // validateEmail: this.auth.procedure
    //   .input(z.object({ name: z.string().optional() }))
    //   .query(({ input }) => {
    //     return `Validating an email`;
    //   }),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
