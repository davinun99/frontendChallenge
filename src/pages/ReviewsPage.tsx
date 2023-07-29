import React from 'react'
import { gql, useSubscription } from '@apollo/client'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import { NavLink } from 'react-router-dom'

import { GraphQlReview } from 'src/types'
import ReviewList from 'src/components/ReviewList'
import PageTitle from 'src/components/PageTitle'
import ReviewSkeleton from 'src/components/loaders/ReviewSkeleton'
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

  if (!loading && (error || !data)) {
    toast.error('Error loading reviews :' + JSON.stringify(error))
  }

  return (
    <>
      <PageTitle title='Reviews'/>
      <div className='container'>
        <Breadcrumb>
          <BreadcrumbItem linkAs={NavLink} linkProps={{ to: '/' }}>Home</BreadcrumbItem>
          <BreadcrumbItem active>Reviews</BreadcrumbItem>
        </Breadcrumb>
      </div>
      {loading ? <ReviewSkeleton /> : data && <ReviewList data={data} />}
    </>
  )
}
export default ReviewsPage
