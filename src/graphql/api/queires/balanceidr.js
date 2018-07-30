import gql from 'graphql-tag';

export const PRICES = gql`
{
  prices {
    accountId
    accountCode
    accountName
    openPrice
    lowPrice
    highPrice
    lastDone
    changePct
    volume
    volumeRp
  }
}`

