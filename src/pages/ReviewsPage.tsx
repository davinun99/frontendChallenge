import React from 'react'
import { gql, useSubscription } from '@apollo/client'
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import { NavLink } from 'react-router-dom'
import Select, { MultiValue } from 'react-select'

import { GraphQlReview } from 'src/types'
import ReviewList from 'src/components/ReviewList'
import PageTitle from 'src/components/PageTitle'
import ReviewSkeleton from 'src/components/loaders/ReviewSkeleton'
type Option = {
  value: string, label: string
}
const getOptions = (data: GraphQlReview | undefined) => {
  if (!data) {
    return []
  }
  const items: string[] = []
  data.queryReview.forEach(review => review.item ? items.push(review.item.name) : null)
  const options = [...new Set(items)]
  return options.map(option => ({ value: option, label: option }))
}
const ReviewsPage = () => {
  const [selectedItemNames, setSelectedItemNames] = React.useState<string[]>([])
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
  const options = React.useMemo(() => getOptions(data), [data])
  const handleFilterChange = (selectedItemNames: MultiValue<Option>) => {
    setSelectedItemNames(selectedItemNames.map(item => item.value))
  }
  const filterReviews = () => {
    const _data: GraphQlReview = data
      ? { ...data }
      : {
          queryReview: []
        }
    if (data && selectedItemNames.length > 0) {
      _data.queryReview = data?.queryReview.filter(review => review.item?.name && selectedItemNames.includes(review.item.name))
    }
    return _data
  }
  console.log({ selectedItemNames, data })
  return (
    <>
      <PageTitle title='Reviews'/>
      <Container>
        <Breadcrumb>
          <BreadcrumbItem linkAs={NavLink} linkProps={{ to: '/' }}>Home</BreadcrumbItem>
          <BreadcrumbItem active>Reviews</BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Col>
            <Select isMulti options={options} onChange={handleFilterChange} />
          </Col>
        </Row>
      </Container>
      {loading ? <ReviewSkeleton /> : data && <ReviewList data={filterReviews()} />}
    </>
  )
}
export default ReviewsPage
