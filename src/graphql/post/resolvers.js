// QUERY RESOLVERS
const post = async (_, { id }, { dataSources }) => {
  try {
    const res = dataSources.postApi.getPost(id);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

const posts = async (_, { input }, { dataSources }) => {
  try {
    const res = dataSources.postApi.getPosts(input);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

// MUTATION RESOLVERS
const createPost = async (_, { data }, { dataSources }) => {
  return dataSources.postApi.createPost(data);
};

const updatePost = async (_, { postId, data }, { dataSources }) => {
  return dataSources.postApi.updatePost(postId, data);
};

const deletePost = async (_, { postId }, { dataSources }) => {
  return dataSources.postApi.deletePost(postId);
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
