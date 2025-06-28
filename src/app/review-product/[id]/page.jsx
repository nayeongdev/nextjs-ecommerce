import React from 'react'

const ReviewProductDetail = ({ params }) => {
  const { id } = params;
  return (
    <div>Review Product {id}</div>
  )
}

export default ReviewProductDetail 