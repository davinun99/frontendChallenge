/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { GraphQlReview } from 'src/types'
import { Container } from 'react-bootstrap'
import Review from './Review'

interface Props {
  data: GraphQlReview;
}

const ReviewList: React.FC<Props> = ({ data }) => (
  <Container>
    <ul className='list-unstyled row mt-5'>
      {!!data.queryReview &&
        data.queryReview.map(
          (review, i) =>
            !!review && (
              <Review key={review.id} review={review} />
            )
        )}
    </ul>
  </Container>
)

export default ReviewList
