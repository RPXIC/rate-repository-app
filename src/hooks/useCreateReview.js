import { useMutation } from "@apollo/client"
import { CREATE_REVIEW } from "../graphql/mutations"

const useCreateReview = () => {
  const [createReviewMutation] = useMutation(CREATE_REVIEW)

  const createReview = async (repositoryName, ownerName, rating, text) => {
    const { data } = await createReviewMutation(({
      variables: {
        repositoryName,
        ownerName,
        rating: Number(rating),
        text
      }
    }))
    return data
  }

  return {
    createReview
  }
}

export default useCreateReview