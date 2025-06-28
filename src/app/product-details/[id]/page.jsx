import React from 'react'

const ProductDetail = ({ params }) => {
  const { id } = params;
  return (
    <div>Product Detail {id}</div>
  )
}

export default ProductDetail 