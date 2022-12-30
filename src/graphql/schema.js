import { gql } from 'apollo-server';

// TYPEDEFS
import { userTypeDefs } from './user/typedefs';
import { postTypeDefs } from './post/typedefs';
import { apiFiltersTypeDefs } from './api-filters/typedefs';
import { loginTypedefs } from './login/typesdefs';

// RESOLVERS
import { userResolvers } from './user/resolvers';
import { postResolvers } from './post/resolvers';
import { apiFiltersResolvers } from './api-filters/resolvers';
import { loginResolvers } from './login/resolvers';

export const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }

  type Mutation {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
  Mutation: {
    _empty: () => true,
  },
};

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  postTypeDefs,
  apiFiltersTypeDefs,
  loginTypedefs,
];

export const resolvers = [
  rootResolvers,
  userResolvers,
  postResolvers,
  apiFiltersResolvers,
  loginResolvers,
];
