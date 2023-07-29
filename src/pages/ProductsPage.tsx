import React from 'react'
import { gql, useSubscription } from '@apollo/client'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Breadcrumb, BreadcrumbItem, Button, Container } from 'react-bootstrap'

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
        reviews {
          id
          text
        }
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
      <Container>
        <Breadcrumb>
          <BreadcrumbItem linkAs={NavLink} linkProps={{ to: '/' }}>Home</BreadcrumbItem>
          <BreadcrumbItem active linkAs={NavLink} linkProps={{ to: '/products' }}>Products</BreadcrumbItem>
        </Breadcrumb>
      </Container>
      <Container>
        <div className='d-flex justify-content-end my-2'>
          <Button className='btn btn-primary mt-3' type='button'
            onClick={goToAddProduct}
          >Add Product</Button>
        </div>
      </Container>
      {
        loading
          ? <ProductSkeleton />
          : data && <ProductList data={data} />
      }
    </>
  )
}
export default ProductsPage
