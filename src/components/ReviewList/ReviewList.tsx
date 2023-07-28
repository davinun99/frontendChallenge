/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { GraphQlReview } from 'src/types'

interface Props {
  data: GraphQlReview;
}

const className = 'LaunchList'

const LaunchList: React.FC<Props> = ({ data }) => {
  console.log('Review list', { data })
  return (
    <div className={className}>
        <h3>Reviews</h3>
        <ol className={`${className}__list`}>
        {!!data.queryReview &&
            data.queryReview.map(
              (review, i) =>
                !!review && (
                <li key={`review-${review.id}`} className={`${className}__item`}>
                    {review.item?.name} ({review.text})
                </li>
                )
            )}
        </ol>
    </div>
  )
}

export default LaunchList
