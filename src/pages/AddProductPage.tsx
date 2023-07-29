import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'

import PageTitle from 'src/components/PageTitle'
import AddProductForm from 'src/components/AddProductForm'

const AddProductPage = () => (
  <>
    <PageTitle title='Add new product' />
    <div className='container'>
      <Breadcrumb>
        <BreadcrumbItem href='/'>Home</BreadcrumbItem>
        <BreadcrumbItem href='/products'>Products</BreadcrumbItem>
        <BreadcrumbItem active href='/add-product'>Add product</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <AddProductForm />
  </>
)
export default AddProductPage
