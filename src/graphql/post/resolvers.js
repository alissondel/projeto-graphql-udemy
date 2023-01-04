import { AuthenticationError } from 'apollo-server';
import { checkIsLoggedIn } from '../login/utils/login-functions';

// QUERY RESOLVERS
const post = async (_, { id }, { dataSources, loggedUserId }) => {
  try {
    if (!loggedUserId) {
      throw new AuthenticationError('You have to log in');
    }

    const res = dataSources.postApi.getPost(id);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

const posts = async (_, { input }, { dataSources, loggedUserId }) => {
  try {
    if (!loggedUserId) {
      throw new AuthenticationError('You have to log in');
    }

    const res = dataSources.postApi.getPosts(input);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

// MUTATION RESOLVERS
const createPost = async (_, { data }, { dataSources, loggedUserId }) => {
  try {
    checkIsLoggedIn(loggedUserId);
    data.userId = loggedUserId;

    return dataSources.postApi.createPost(data);
  } catch (error) {
    throw new Error(error);
  }
};

const updatePost = async (
  _,
  { postId, data },
  { dataSources, loggedUserId },
) => {
  try {
    checkIsLoggedIn(loggedUserId);

    return dataSources.postApi.updatePost(postId, data);
  } catch (error) {
    throw new Error(error);
  }
};

const deletePost = async (_, { postId }, { dataSources, loggedUserId }) => {
  try {
    checkIsLoggedIn(loggedUserId);

    return dataSources.postApi.deletePost(postId);
  } catch (error) {
    throw new Error(error);
  }
};

// FIELD RESOLVERS
const user = async ({ userId }, _, { dataSources }) => {
  try {
    return dataSources.userApi.batchLoadById(userId);
  } catch (error) {
    throw new Error(error);
  }
};

export const postResolvers = {
  Query: { post, posts },
  Mutation: { createPost, updatePost, deletePost },
  Post: { user },
};
