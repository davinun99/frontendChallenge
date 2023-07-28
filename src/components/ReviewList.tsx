/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { GraphQlReview } from 'src/types'
import { faker } from '@faker-js/faker'

interface Props {
  data: GraphQlReview;
}

const ReviewList: React.FC<Props> = ({ data }) => {
  console.log('Review list', { data })
  return (
    <main className="container">
      <h3 className='shadow-sm rounded p-3 mt-3 text-center'>Reviews</h3>
      <div className='d-flex justify-content-end'>
        <button className='btn btn-primary mt-3' type='button'>Add Review</button>
      </div>
      <ul className='list-unstyled row mt-3'>
        {!!data.queryReview &&
          data.queryReview.map(
            (review, i) =>
              !!review && (
              <li key={`review-${review.id}`} className="col-12 col-md-6 col-lg-4 mb-2">
                <div className='review-card h-100'>
                  <div className='d-flex align-items-center'>
                    <img alt='Reviewer' className='reviewer-photo' src='https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png' />
                    <span className='ms-2'>
                      {faker.person.fullName()}
                      {Math.random() > 0.6 && <i className="reviewer-check bi bi-check-circle-fill" />}
                    </span>
                  </div>
                  <p className='my-0 text-secondary'>{review.item?.name || 'Unknown item :o'}</p>
                  <div className='d-flex'>
                    <ul className='list-unstyled stars-list me-1'>
                      <li><i className="bi bi-star" /></li>
                      <li><i className="bi bi-star" /></li>
                      <li><i className="bi bi-star" /></li>
                      <li><i className="bi bi-star" /></li>
                      <li><i className="bi bi-star" /></li>
                    </ul>
                    <b className='review-title'>{faker.lorem.words(3)}</b>
                  </div>
                  {review.text}
                </div>
              </li>
              )
          )}
      </ul>
    </main>
  )
}

export default ReviewList
