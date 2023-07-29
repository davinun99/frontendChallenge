import React from 'react'
import { gql, useSubscription } from '@apollo/client'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Breadcrumb, BreadcrumbItem, Button, Col, Container, FormControl, Row } from 'react-bootstrap'
import fuzzysort from 'fuzzysort'

import { GraphQlItem } from 'src/types'
import ProductList from 'src/components/ProductList'
import PageTitle from 'src/components/PageTitle'
import ProductSkeleton from 'src/components/loaders/ProductSkeleton'

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = React.useState('')
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
  const filterProducts: () => GraphQlItem = () => {
    if (!data) {
      return {
        queryItem: []
      }
    }
    if (!searchTerm) {
      return data
    }
    const results = fuzzysort.go(searchTerm, data.queryItem, {
      limit: 20,
      keys: ['name', 'description']
    })
    return {
      queryItem: results.map(result => result.obj)
    }
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
        <Row className='align-items-center'>
          <Col>
            <FormControl placeholder='Search products by name!' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </Col>
          <Col>
            <Button className='btn btn-primary' type='button'
              onClick={goToAddProduct}
            >Add Product</Button>
          </Col>
        </Row>
      </Container>
      {
        loading
          ? <ProductSkeleton />
          : data && <ProductList data={filterProducts()} />
      }
    </>
  )
}
export default ProductsPage
