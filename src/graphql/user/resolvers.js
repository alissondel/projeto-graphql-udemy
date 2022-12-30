// QUERY RESOLVERS
const user = async (_, { id }, { dataSources }) => {
  try {
    const user = await dataSources.userApi.getUser(id);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const users = async (_, { input }, { dataSources }) => {
  try {
    const users = await dataSources.userApi.getUsers(input);
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

// MUTATION RESOLVERS
const createUser = async (_, { data }, { dataSources }) => {
  return dataSources.userApi.createUser(data);
};

const updateUser = async (_, { userId, data }, { dataSources }) => {
  return dataSources.userApi.updateUser(userId, data);
};

const deleteUser = async (_, { userId }, { dataSources }) => {
  return dataSources.userApi.deleteUser(userId);
};

// FIELD RESOLVERS
const posts = ({ id }, _, { dataSources }) => {
  return dataSources.postApi.batchLoadById(id);
};

export const userResolvers = {
  Query: { user, users },
  Mutation: { createUser, updateUser, deleteUser },
  User: { posts },
};
