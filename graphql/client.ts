import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL as string,
);
