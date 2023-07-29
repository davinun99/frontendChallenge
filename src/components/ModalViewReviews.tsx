import React from 'react'
import { Modal } from 'react-bootstrap'

import { Item } from 'src/types'
import Review from './Review'

interface Props {
  item: Item | null;
  isVisible: boolean;
  toggleModal: () => void;
}
const ModalViewReviews = ({ item, isVisible, toggleModal }: Props) => {
  if (!item) {
    return null
  }
  return (
    <Modal show={isVisible} size='lg' onHide={toggleModal}>
      <Modal.Header>
        <Modal.Title>Reviews of {item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className='list-unstyled row mt-5'>
          {item.reviews?.map(review => (
            <Review key={review.id}
              className = 'col-12 col-md-6 mb-2'
              itemName={item.name}
              review={review}
            />
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  )
}
export default ModalViewReviews
