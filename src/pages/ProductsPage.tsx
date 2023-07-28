import React from 'react'
import { gql, useSubscription } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { GraphQlItem } from 'src/types'
import ProductList from 'src/components/ProductList'
import PageTitle from 'src/components/PageTitle'
import ProductSkeleton from 'src/components/loaders/ProductSkeleton'

const ProductsPage = () => {
  const { data, loading, error } = useSubscription<GraphQlItem>(gql`
    subscription QueryProduct {
      queryItem {
        name
        img
        price
        description
      }
    }
  `)
  const navigate = useNavigate()
  if (!loading && (error || !data)) {
    toast.error('Error loading products :' + JSON.stringify(error))
  }
  const goToAddProduct = () => {
    navigate('/add-product')
  }
  return (
    <>
      <PageTitle title='Products' />
      <div className='container'>
        <div className='d-flex justify-content-end my-2'>
          <button className='btn btn-primary mt-3' type='button'
            onClick={goToAddProduct}
          >Add Product</button>
        </div>
      </div>
      {
        loading
          ? <ProductSkeleton />
          : data && <ProductList data={data} />
      }
    </>
  )
}
export default ProductsPage
