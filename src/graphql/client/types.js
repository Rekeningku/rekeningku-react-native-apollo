export const typeDefs = `
  type Auth {
    token: String!
    hash: String!
    status: Int!
    authType: Int!
    isLoggedIn: Boolean!
  }

  type Mutation {
    createAuth(token: String!, hash: String!, status: Int!, authType: Int!): Auth
    resetAuth: Auth
  }

  type Query {
    auth: Auth
  }
`;