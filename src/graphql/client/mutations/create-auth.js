import gql from 'graphql-tag';

export const CREATE_AUTH = gql`
  mutation createAuth($token: String!, $hash: String!, $authType: Int!, $status: Int!) {
    createAuth(token: $token, hash: $hash, authType: $authType, status: $status) @client{
      token
      hash
      authType
      status
    }
  }
`;
