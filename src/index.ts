import "reflect-metadata";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import { resolvers } from "./resolvers";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers,
  });
  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
  console.log(`🚀 Server listening at: ${url}`);
}

bootstrap();