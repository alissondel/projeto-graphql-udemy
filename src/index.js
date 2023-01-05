import { ApolloServer } from 'apollo-server';

import { knex } from './knex/';
import { context } from './graphql/context/index';

import { resolvers, typeDefs } from './graphql/schema';

// DATASOURCES
import { PostsApi } from './graphql/schema/post/datasources';
import { UsersApi } from './graphql/schema/user/datasources';
import { LoginApi } from './graphql/schema/login/datasources';

import { CommentSQLDataSource } from './graphql/schema/comment/datasources';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    return {
      postApi: new PostsApi(),
      userApi: new UsersApi(),
      loginApi: new LoginApi(),
      commentDb: new CommentSQLDataSource(knex),
    };
  },
  uploads: false,
  cors: {
    origin: ['https://cdpn.io'],
    credentials: true,
  },
});

const port = process.env.PORT || 3030;
server.listen(port).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
