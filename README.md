# Turborepo + NestJS + NextJS + Trpc

An e2e fillstack javascript setup.

## Quickstart

- Clone the repository
- Run the following command:

```
pnpm i
```
- To install all necessary packages

```
pnpm run dev
```
- To spin up  the server


## What's inside?

This Turborepo includes the following packages/apps:

### Apps 

- `server`: a Nest.js app configured with TRPC server
- `web`: a Next.js app configured with TRPC client

### Packages

- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).
