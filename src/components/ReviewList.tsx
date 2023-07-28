/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { GraphQlReview } from 'src/types'

interface Props {
  data: GraphQlReview;
}

const ReviewList: React.FC<Props> = ({ data }) => {
  console.log('Review list', { data })
  return (
    <main className="container">
        <h3 className='shadow-sm rounded p-3 mt-3 text-center'>Reviews</h3>
        <ul className='list-unstyled row'>
          {!!data.queryReview &&
            data.queryReview.map(
              (review, i) =>
                !!review && (
                <li key={`review-${review.id}`} className="col-12 col-md-6 mb-2">
                  <div className='around-card row g-1'>
                    <div className='col-4'>
                      <img alt={review.item?.name} src={review.item?.img || 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'}/>
                    </div>
                    <div className='col-8'>
                      <h6 className='bold'><b>{review.item?.name}</b></h6>
                      {/* ({review.text}) */}
                      <b>Description</b>
                      <p>
                        {review.item?.description}
                      </p>
                      <span>
                        <b>Price:</b> ${review.item?.price}
                      </span>
                    </div>
                  </div>
                </li>
                )
            )}
        </ul>
    </main>
  )
}

export default ReviewList
