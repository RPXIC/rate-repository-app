import React from 'react'
import { useHistory } from 'react-router'
import { useCreateReview } from 'hooks'
import CreateReviewForm from '../CreateReviewForm'

const FORM_STATUS = {
  idle: 'idle',
  error: 'error'
}

const CreateReview = () => {
  const { createReview } = useCreateReview()
  const history = useHistory()

  const handleFormikSubmit = async (values, actions) => {
    actions.setSubmitting(true)
    try {
      const { repositoryName, ownerName, rating, text } = values
      const { createReview: { repositoryId } } = await createReview(repositoryName, ownerName, rating, text)
      actions.setSubmitting(false)
      actions.setStatus(FORM_STATUS.idle)
      history.push(`/details/${repositoryId}`)
    } catch (error) {
      actions.setStatus(FORM_STATUS.error)
    }
  }

  return <CreateReviewForm onSubmit={handleFormikSubmit} />
}

export default CreateReview