import { AuthenticationError } from 'apollo-server';
import { checkOwner } from '../login/utils/login-functions';

// QUERY RESOLVERS
const user = async (_, { id }, { dataSources, loggedUserId }) => {
  try {
    if (!loggedUserId) {
      throw new AuthenticationError('You have to log in');
    }

    const user = await dataSources.userApi.getUser(id);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const users = async (_, { input }, { dataSources, loggedUserId }) => {
  try {
    if (!loggedUserId) {
      throw new AuthenticationError('You have to log in');
    }

    const users = await dataSources.userApi.getUsers(input);
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

// MUTATION RESOLVERS
const createUser = async (_, { data }, { dataSources }) => {
  try {
    return dataSources.userApi.createUser(data);
  } catch (error) {
    throw new Error(error);
  }
};

const updateUser = async (
  _,
  { userId, data },
  { dataSources, loggedUserId },
) => {
  try {
    checkOwner(userId, loggedUserId);

    return dataSources.userApi.updateUser(userId, data);
  } catch (error) {
    throw new Error(error);
  }
};

const deleteUser = async (_, { userId }, { dataSources, loggedUserId }) => {
  try {
    checkOwner(userId, loggedUserId);

    return dataSources.userApi.deleteUser(userId);
  } catch (error) {
    throw new Error(error);
  }
};

// FIELD RESOLVERS
const posts = ({ id }, _, { dataSources }) => {
  try {
    return dataSources.postApi.batchLoadById(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const userResolvers = {
  Query: { user, users },
  Mutation: { createUser, updateUser, deleteUser },
  User: { posts },
};
