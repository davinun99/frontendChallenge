import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import PageTitle from 'src/components/PageTitle'
import AddProductForm from 'src/components/AddProductForm'

const AddProductPage = () => (
  <>
    <PageTitle title='Add new product' />
    <div className='container'>
      <Breadcrumb>
        <BreadcrumbItem linkAs={NavLink} linkProps={{ to: '/' }}>
            Home
        </BreadcrumbItem>
        <BreadcrumbItem linkAs={NavLink} linkProps={{ to: '/products' }}>
          Products
        </BreadcrumbItem>
        <BreadcrumbItem active linkAs={NavLink} linkProps={{ to: '/add-product' }}>Add product</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <AddProductForm />
  </>
)
export default AddProductPage
