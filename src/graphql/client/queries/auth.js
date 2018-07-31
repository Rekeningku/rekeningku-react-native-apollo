
import gql from 'graphql-tag';
export const AUTH = gql`
    query auth{
        auth @client{
            status
            authType
            token
            hash,
            isLoggedIn
        }
    }
`