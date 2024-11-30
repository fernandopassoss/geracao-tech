import React from 'react'
import FilterGroup from '../components/FilterGroup'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import '../styles/ProductListingPage.scss'

function ProductListingPage() {
  return (
    <>
      <Header/>
       <div className='product-listing-page'>
      <div className='div-product-filter'>
       
      <FilterGroup />
      </div>
      <div className='div-product-listing'>
   
        <Section ativarComponente={'produtos'}/> 
      </div>
      </div>
   
      </>
   
  )
}

export default ProductListingPage
