import React from 'react'
import '../styles/ProductListing.scss'
import { BsArrowRight } from "react-icons/bs";

function ProductListing() {
  return (
<div>
    <div className='listing-cabecario'>
      <p className='listing-cabecario-item1'>
        Produtos em alta
      </p>
      <div className='listing-cabecario-item2'>
        <a href='#' className='cabecario-link'>
          Ver todos
        </a>
        <BsArrowRight className='cabecario-seta' />
      </div>
      
    </div>
    <div className='listing'>
      teste
    </div>
    </div>

  )
}

export default ProductListing
