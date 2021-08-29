import { useQuery, useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";
import { AUTHORIZED_USER } from "../graphql/queries";

const useAuthorizedUser = (variables) => {
  const [deleteReviewMutation] = useMutation(DELETE_REVIEW)

  const { data, refetch } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    variables
  })


  const deleteReview = async (id) => {
    const { data } = await deleteReviewMutation(({
      variables: {
        id
      }
    }))
    return data
  }

  return {
    isAuthorized: data !== undefined && data.authorizedUser !== null,
    myReviews: data?.authorizedUser?.reviews?.edges.map(({ node }) => node) || [],
    deleteReview,
    refetch
  }
}

export default useAuthorizedUser