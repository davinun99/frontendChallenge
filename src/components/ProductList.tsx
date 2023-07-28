import * as React from 'react'
import { GraphQlItem } from 'src/types'

const noPicUrl = 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'
interface Props {
  data: GraphQlItem;
}

const ProductList: React.FC<Props> = ({ data }) => (
  <main className="container">
    <ul className='list-unstyled row'>
      {!!data.queryItem &&
        data.queryItem.map(
          item =>
            !!item && (
            <li key={`review-${item.name}`} className="col-12 col-md-6 p-lg-3 mb-4 mb-sm-0">
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

export default ProductList
