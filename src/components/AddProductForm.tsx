import { gql, useMutation } from '@apollo/client'
import React from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { GraphQLAddProduct } from 'src/types'
import Loader from './loaders/Loader'

const ADD_PRODUCT_MUTATION = gql`
  mutation AddProduct(
    $name: String!
    $img: String!
    $price: Float!
    $description: String!
  ) {
    addItem(
      input: {
        name: $name
        img: $img
        price: $price
        description: $description
      }
    ) {
      numUids
    }
  }
`

const AddProductForm = () => {
  const [addItem, { loading }] = useMutation<GraphQLAddProduct>(ADD_PRODUCT_MUTATION)
  const navigate = useNavigate()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const variables = Object.fromEntries(formData)
    try {
      await addItem({
        variables
      })
      toast.success(`Successfully created product ${variables.name}`)
      navigate('/products')
    } catch (error) {
      toast.error('Error creating product :( ')
    }
  }
  return (
    <main className='container position-relative'>
      {loading && <Loader />}
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='form-group col-md-4 mt-2'>
            <label htmlFor='name'>Name</label>
            <input required className='form-control' id='name' name='name' />
          </div>
          <div className='form-group col-md-3 mt-2'>
            <label htmlFor='price'>Price</label>
            <input required className='form-control' id='price' name='price' step={0.01} type='number' />
          </div>
          <div className='form-group col-md-7 mt-2'>
            <label htmlFor='img'>Image url</label>
            <input required className='form-control' id='img' name='img' type='url' />
          </div>
          <div className='form-group col-md-7 mt-2'>
            <label htmlFor='description'>Description</label>
            <textarea required className='form-control' id='description' name='description' />
          </div>
        </div>
        <div className='mt-3'>
          <button className='btn btn-primary' type='submit'>Add Product</button>
        </div>
      </form>
    </main>
  )
}
export default AddProductForm
