import gql from 'graphql-tag';

export const CHANGE_BONUS = gql`
    mutation changeBonus($type: Int!){
        changeBonus(type:$type){
            success
        }
    }
`