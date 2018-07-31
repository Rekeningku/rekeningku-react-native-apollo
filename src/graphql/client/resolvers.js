import gql from 'graphql-tag';
import { AUTH } from './queries/auth';
import { client } from '../../apollo-client';

export const defaults = {
    auth:{
        __typename: 'auth',
        status: 0,
        token: '',
        authType: '',
        hash: '',
        isLoggedIn: false
    }
};


export const resolvers = {
  Mutation: {
    createAuth: (_, { hash, status, token, authType}, { cache }) => {
        const previous = cache.readQuery({query: AUTH})
        const data = {
            auth: {
                ...previous,
                hash, 
                status, 
                token,
                authType,
                isLoggedIn: true,
                __typename: 'auth',
            }
        }
        cache.writeData({ data })
        return data.auth
    },
    resetAuth: (_, variables, { cache }) => {
        console.log('i am called')
        const data = {
            ...defaults
        }
        cache.writeData({ data })
        return data.auth
    },
  },
};
