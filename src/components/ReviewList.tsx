/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { GraphQlReview } from 'src/types'
import { faker } from '@faker-js/faker'
import { Container } from 'react-bootstrap'

interface Props {
  data: GraphQlReview;
}

const ReviewList: React.FC<Props> = ({ data }) => (
  <Container>
    <ul className='list-unstyled row mt-5'>
      {!!data.queryReview &&
        data.queryReview.map(
          (review, i) =>
            !!review && (
            <li key={`review-${review.id}`} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className='review-card h-100'>
                <div className='d-flex align-items-center'>
                  <img alt='Reviewer' className='reviewer-photo' src={faker.image.avatar()} />
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
  </Container>
)

export default ReviewList
