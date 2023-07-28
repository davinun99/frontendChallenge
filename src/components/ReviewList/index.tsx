import React from 'react'
import ReviewList from './ReviewList'
import { gql, useSubscription } from '@apollo/client'
import { GraphQlReview } from 'src/types'

const ReviewListContainer = () => {
  const { data, loading, error } = useSubscription<GraphQlReview>(gql`
    subscription QueryReview {
      queryReview {
        id
        text
        item {
          name
          img
          price
          description
        }
      }
    }
  `)
  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>ERROR</div>
  }

  return <ReviewList data={data} />
}
export default ReviewListContainer
