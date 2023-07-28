import React from 'react'
import { gql, useSubscription } from '@apollo/client'
import { GraphQlReview } from 'src/types'
import ReviewList from 'src/components/ReviewList'
import PageTitle from 'src/components/PageTitle'

const ReviewsPage = () => {
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

  return (
    <>
      <PageTitle title='Reviews'/>
      <ReviewList data={data} />
    </>
  )
}
export default ReviewsPage
