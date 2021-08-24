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

export const GET_REPOSITORY = gql`
  query ($id: ID!) {
    repository (id:$id) {
      id
      fullName
      description
      language
      reviews {
        totalCount
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
      ratingAverage
      forksCount
      stargazersCount
      ownerAvatarUrl
      url
    }
  }
`