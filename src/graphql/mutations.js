import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  mutation signIn ($username: String!, $password: String!) {
    authorize (credentials: { username: $username , password: $password }) {
      accessToken
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation review ($repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String) {
    createReview (review: {repositoryName: $repositoryName, ownerName: $ownerName, rating: $rating, text: $text }) {
      repositoryId
    }
  }
`

export const SIGN_UP = gql`
  mutation createUser ($user: CreateUserInput!) {
    createUser (user: $user) {
      id
      username
    }
  }
`