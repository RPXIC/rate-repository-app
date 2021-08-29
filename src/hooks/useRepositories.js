import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (variables) => {
  const { data = {}, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables
  })

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) return

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  }

  const repositoriesNodes = data?.repositories
    ? data.repositories.edges.map(edge => edge.node)
    : []

  return {
    fetchMore: handleFetchMore,
    loading,
    repositories: repositoriesNodes,
  }
}

export default useRepositories