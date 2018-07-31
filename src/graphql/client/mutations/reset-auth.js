import gql from 'graphql-tag';

export const RESET_AUTH = gql`
  mutation resetAuth {
    resetAuth @client{
      token
      hash
      authType
      status
    }
  }
`;
