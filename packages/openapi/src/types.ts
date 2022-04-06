import type {
  DefaultErrorShape,
  ProcedureRecord,
  TRPCRouter,
} from '@trpc/server';

type OpenApiCompliantQueries<
  TInputContext = any,
  TContext = TInputContext,
> = ProcedureRecord<
  TInputContext,
  TContext,
  Record<string, string>,
  any,
  any,
  any
>;

type OpenApiCompliantMutations<
  TInputContext = any,
  TContext = TInputContext,
> = ProcedureRecord<TInputContext, TContext, any, any, any, any>;

type OpenApiCompliantSubscriptions = never;

export type OpenApiCompliantRouter<
  TInputContext = any,
  TContext = TInputContext,
> = Omit<
  TRPCRouter<
    TInputContext,
    TContext,
    OpenApiCompliantQueries<TInputContext, TContext>,
    OpenApiCompliantMutations<TInputContext, TContext>,
    OpenApiCompliantSubscriptions,
    DefaultErrorShape
  >,
  'subscription'
>;

type undef = undefined extends any ? 'true' : 'false';
type unkno = undefined extends any ? 'true' : 'false';
