/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { GraphQlItem } from 'src/types'

interface Props {
  data: GraphQlItem;
}

const ProductList: React.FC<Props> = ({ data }) => {
  console.log('Review list', { data })
  return (
    <main className="container">
        <h3 className='shadow rounded p-3 my-5 text-center'>Products</h3>
        <ul className='list-unstyled row'>
          {!!data.queryItem &&
            data.queryItem.map(
              item =>
                !!item && (
                <li key={`review-${item.name}`} className="col-12 col-md-6 p-0 p-md-2 p-lg-3">
                  <div className='around-card row g-1 p-3'>
                    <div className='col-4'>
                      <img alt={item.name} className='item-img' src={item.img || 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'}/>
                    </div>
                    <div className='col-8 d-flex flex-column justify-content-between ps-3'>
                      <div>
                        {/* ({review.text}) */}
                        <h6 className='bold'><b>{item.name}</b></h6>
                        <b>Description</b>
                        <p>
                          {item.description}
                        </p>
                      </div>
                      <p className=''>
                        <b>Price:</b> ${item.price}
                      </p>
                    </div>
                  </div>
                </li>
                )
            )}
        </ul>
    </main>
  )
}

export default ProductList
