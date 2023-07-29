import React from 'react'
import { gql, useSubscription } from '@apollo/client'
import { GraphQlReview } from 'src/types'
import ReviewList from 'src/components/ReviewList'
import PageTitle from 'src/components/PageTitle'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'

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
      <div className='container'>
        <Breadcrumb>
          <BreadcrumbItem href='/'>Home</BreadcrumbItem>
          <BreadcrumbItem active href='#'>Reviews</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <ReviewList data={data} />
    </>
  )
}
export default ReviewsPage
