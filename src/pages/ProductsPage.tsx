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
  const [showCheapFirst, setShowCheapFirst] = React.useState(false)
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
    // eslint-disable-next-line immutable/no-let
    let _data: GraphQlItem = data || {
      queryItem: []
    }
    if (searchTerm) {
      const results = fuzzysort.go(searchTerm, _data.queryItem, {
        limit: 20,
        keys: ['name', 'description']
      })
      _data = {
        queryItem: results.map(result => result.obj)
      }
    }
    _data.queryItem.sort((a, b) => showCheapFirst ? a.price - b.price : b.price - a.price)
    return _data
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
            <Button className='me-2' type='button' variant='success'
              onClick={() => setShowCheapFirst(!showCheapFirst)}
            >
              {!showCheapFirst ? 'Show cheapest products first' : 'Show more expensive products first'}
            </Button>
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
