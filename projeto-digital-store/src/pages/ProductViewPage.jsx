import React from 'react'
import ProductOptions from '../components/ProductOptions'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import Gallery from '../components/Gallery'

function ProductViewPage() {


  return (
    <div>
      <Layout children={'productviewpage'}/>
    </div>
  )
}

export default ProductViewPage
