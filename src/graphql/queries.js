import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query ($first: Int, $after: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories (first:$first, after:$after, orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      pageInfo {
        hasNextPage
        startCursor
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
  query ($includeReviews: Boolean = false) {
    authorizedUser {
      id
      username
      reviews @include (if: $includeReviews) {
        edges {
          node {
            rating
            createdAt
            user {
              username
            }
            text
            repositoryId
            id
          }
        }
      }
    }
  }
`

export const GET_REPOSITORY = gql`
  query ($id: ID!, $first: Int, $after: String) {
    repository (id:$id) {
      id
      fullName
      description
      language
      reviews (first: $first, after: $after) {
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
        pageInfo {
          endCursor
          startCursor
          hasNextPage
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