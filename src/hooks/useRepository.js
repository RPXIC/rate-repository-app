import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (id) => {
  const { data = {}, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id }
  })

  const { repository = null } = data

  return {
    loading,
    repository,
    reviews: data.repository?.reviews.edges.map(({ node }) => node)
  }
}

export default useRepository