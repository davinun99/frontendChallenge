import * as React from 'react'
import { Container } from 'react-bootstrap'

import { GraphQlItem, Item } from 'src/types'
import AddReviewModal from './AddReviewModal'
import ModalViewReviews from './ModalViewReviews'

const noPicUrl = 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'
interface Props {
  data: GraphQlItem;
}

const ProductList: React.FC<Props> = ({ data }) => {
  const [selectedItem, setSelectedItem] = React.useState<Item | null>(null)
  const [addModalIsVisible, setAddModalIsVisible] = React.useState(false)
  const [viewReviewsModalIsVisible, setViewReviewsModalIsVisible] = React.useState(false)
  const toggleModalAdd = () => setAddModalIsVisible(!addModalIsVisible)
  const toggleModalView = () => setViewReviewsModalIsVisible(!viewReviewsModalIsVisible)

  const handleOpenReviewModal = (item: Item) => {
    setSelectedItem(item)
    toggleModalAdd()
  }
  const handleOpenViewModal = (item: Item) => {
    setSelectedItem(item)
    toggleModalView()
  }
  return (
    <>
      <AddReviewModal isVisible={addModalIsVisible} itemName={selectedItem?.name || ''} toggleModal={toggleModalAdd} />
      <ModalViewReviews isVisible={viewReviewsModalIsVisible} item={selectedItem} toggleModal={toggleModalView} />
      <Container>
        <ul className='list-unstyled row'>
          {!!data.queryItem &&
            data.queryItem.map(
              item =>
                !!item && (
                <li key={`review-${item.name}`} className="col-12 col-md-6 p-lg-3 mb-4 mb-lg-0">
                  <div className='around-card row g-1 p-3'>
                    <div className='col-4'>
                      <img alt={item.name} className='item-img' src={item.img || noPicUrl}/>
                    </div>
                    <div className='col-8 d-flex flex-column justify-content-between ps-3'>
                      <div>
                        <h6 className='bold'><b>{item.name}</b></h6>
                        <b>Description</b>
                        <p>
                          {item.description}
                        </p>
                      </div>
                      <div className='d-none d-lg-flex justify-content-between align-items-center'>
                        <span>
                          <b>Price:</b> ${item.price}
                        </span>
                        <div className=''>
                          <button className='btn review-btn me-1 text-white' type='button' onClick={() => handleOpenViewModal(item)}>
                            View reviews
                          </button>
                          <button className='btn review-btn mt-1 mt-md-0' type='button' onClick={() => handleOpenReviewModal(item)}>
                            Review
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='col-12 d-flex d-lg-none justify-content-between mt-auto'>
                      <span className='my-auto'>
                        <b>Price:</b> ${item.price}
                      </span>
                      <div>
                        <button className='btn review-btn me-1 text-white' type='button' onClick={() => handleOpenViewModal(item)}>
                          View reviews
                        </button>
                        <button className='btn review-btn mt-1 mt-md-0' type='button' onClick={() => handleOpenReviewModal(item)}>
                          <i className="text-white bi bi-chat-text" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                )
            )}
        </ul>
      </Container>
    </>
  )
}

export default ProductList
