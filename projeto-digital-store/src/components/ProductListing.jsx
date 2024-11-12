import React from 'react'

import ProductCard from './ProductCard'

function ProductListing() {
  return (
    <div>
      <div>
        <p>
        Produtos em alta
        </p>
        <a>
        Ver todos
        </a>
      </div>
      Lista dos produtos com 8 produto
      <ProductCard/>
    </div>
  )
}

export default ProductListing
