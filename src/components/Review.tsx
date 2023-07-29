import React from 'react'
import { Review as ReviewType } from 'src/types'
import { faker } from '@faker-js/faker'

interface Props {
  review: ReviewType;
  itemName?: string;
  className?: string;
}
const Review = ({ review, className = 'col-12 col-md-6 col-lg-4 mb-2', itemName }: Props) => (
  <li className={className}>
    <div className='review-card h-100'>
      <div className='d-flex align-items-center'>
        <img alt='Reviewer' className='reviewer-photo' src={faker.image.avatar()} />
        <span className='ms-2'>
          {faker.person.fullName()}
          {Math.random() > 0.6 && <i className="reviewer-check bi bi-check-circle-fill" />}
        </span>
      </div>
      <p className='my-0 text-secondary'>{review.item?.name || itemName || 'Unknown item :o'}</p>
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

export default Review
