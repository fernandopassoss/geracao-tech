import React from 'react'
import FilterGroup from '../components/FilterGroup'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import '../styles/ProductListingPage.scss'

function ProductListingPage() {
  return (
    <>
      <Header />
      

     
      <div className='product-listing-cabecario'>
        <p className='texto-cabecario'>
          <p className='texto-cabecario-resultados'>
          Resultados para "Tênis"
          </p>
          - 399 produtos
        </p>
        <select id="estado" name="estado">
          <option value="relevantes" >Ordenar por: mais relevantes</option>
        </select>
      </div>
      <div className='posicao'>
      <div className='product-listing-page'>

        <div className='div-product-filter'>

          <FilterGroup />
        </div>
        <div className='div-product-listing'>

          <Section ativarComponente={'produtos'} />
        </div>
        </div>

        
      </div>
      <Footer/>
    </>

  )
}

export default ProductListingPage
