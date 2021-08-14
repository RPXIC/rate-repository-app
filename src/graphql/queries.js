import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          description
          language
          reviews {
            totalCount
          }
          ratingAverage
          forksCount
          stargazersCount
          ownerAvatarUrl
        }
      }
    }
  }
`

export const AUTHORIZED_USER = gql`
  {
    authorizedUser {
      id
      username
    }
  }
`
