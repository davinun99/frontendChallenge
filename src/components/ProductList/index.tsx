import React from 'react'
import ProductList from './ProductList'
import { gql, useSubscription } from '@apollo/client'
import { GraphQlItem } from 'src/types'

const ReviewListContainer = () => {
  const { data, loading, error } = useSubscription<GraphQlItem>(gql`
    subscription QueryProduct {
      queryItem {
      name
      img
      price
      description
    }
  }`)
  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>ERROR</div>
  }

  return <ProductList data={data} />
}
export default ReviewListContainer
