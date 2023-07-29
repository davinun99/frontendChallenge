import React from 'react'
import { Container } from 'react-bootstrap'

const SkeletonCard = () => (
  <li className="col-12 col-md-6 col-lg-4 mb-2 placeholder-glow">
    <div className='review-card h-100'>
      <div className='d-flex align-items-center'>
        <span className='reviewer-photo placeholder'/>
        <span className='ms-2 placeholder' style={{ width: '130px', height: '20px' }}/>
      </div>
      <div className='d-flex flex-column mt-2'>
        <div className='placeholder mb-2' style={{ width: '130px', height: '20px' }}/>
        <div className='placeholder' style={{ width: '230px', height: '20px' }}/>
      </div>
      <div className='placeholder mt-2' style={{ width: '100%', height: '100px' }}/>
    </div>
  </li>
)
const ReviewSkeleton = () => (
  <Container>
    <ul className='list-unstyled row mt-5'>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </ul>
  </Container>
)
export default ReviewSkeleton
