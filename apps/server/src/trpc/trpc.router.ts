import { INestApplication, Injectable } from '@nestjs/common';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import { TrpcService } from './trpc.service';
import { AuthRouter } from '@server/auth/auth.router';
import { UserRouter } from '@server/user/user.router';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly authRoutes: AuthRouter,
    private readonly userRoutes: UserRouter,
  ) {}

  appRouter = this.trpc.router({
    auth: this.authRoutes.router,
    user: this.userRoutes.router,
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
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
