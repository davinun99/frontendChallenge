import React from 'react'

const SkeletonCard = () => (
  <li className="col-12 col-md-6 p-lg-3 mb-4 mb-sm-0 placeholder-glow">
    <div className='around-card row g-1 p-3'>
      <div className='col-4 placeholder' style={{ height: '220px' }} />
      <div className='col-8 d-flex flex-column justify-content-between ps-3 pt-1 row'>
        <div className='d-flex flex-column'>
          <div className='ms-2 placeholder mb-3' style={{ width: '120px', height: '20px' }} />
          <div className='ms-2 placeholder mb-2' style={{ width: '100px', height: '20px' }} />
          <div className='ms-2 placeholder' style={{ width: '100%', height: '65px' }} />
        </div>
        <div className='d-flex flex-column'>
          <div className='ms-2 placeholder' style={{ width: '120px', height: '20px' }} />
        </div>
      </div>
    </div>
  </li>
)
const ProductSkeleton = () => (
  <main className="container">
    <ul className='list-unstyled row'>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </ul>
  </main>
)
export default ProductSkeleton
