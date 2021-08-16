import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query ($first: Int, $after: String) {
    repositories (first:$first, after:$after) {
      pageInfo {
        hasNextPage
        endCursor
      }
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
