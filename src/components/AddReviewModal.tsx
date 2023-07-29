import React from 'react'
import { gql, useMutation } from '@apollo/client'
import { Button, Form, Modal } from 'react-bootstrap'
import { toast } from 'react-hot-toast'

import { GraphQLAddReview } from 'src/types'
import Loader from './loaders/Loader'

const ADD_REVIEW_MUTATION = gql`
  mutation AddReview($itemName: String!, $reviewText: String!) {
    addReview(input: { item: { name: $itemName }, text: $reviewText }) {
      numUids
    }
  }
`
interface Props {
  itemName: string;
  isVisible: boolean;
  toggleModal: () => void;
}
const AddReviewModal = ({ itemName, isVisible, toggleModal }: Props) => {
  const [reviewText, setReviewText] = React.useState('')
  const [addReview, { loading }] = useMutation<GraphQLAddReview>(ADD_REVIEW_MUTATION)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await addReview({
        variables: {
          itemName, reviewText
        }
      })
      toast.success('Successfully created review!')
      toggleModal()
    } catch (error) {
      toast.error('Error creating review :(')
    }
  }
  return (
    <Modal show={isVisible} onHide={toggleModal}>
      {loading && <Loader />}
      <Modal.Header>
        <Modal.Title>Add Review for {itemName}</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
            <Form.Group className="mb-3" controlId="text">
              <Form.Label>Text</Form.Label>
              <Form.Control as='textarea' placeholder="Your review..." rows={4}
                value={reviewText} onChange={e => setReviewText(e.target.value)}
              />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit'>
            Save
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}
export default AddReviewModal
