import React from 'react'
import CollectionFeatured from './CollectionFeatured'
import SpecialOffer from './SpecialOffer'
import ProducListing from './ProductListing'
import Slideshow from './Slideshow'
import ProductListingPage from '../pages/ProductListingPage'
import { Link, Navigate } from 'react-router-dom'


function Section({ ativarComponente }) {
  return (
    <div style={{ backgroundColor: '#F9F8FE' }}>
      {
        ativarComponente === 'home' && (
          <>
            <Slideshow />
            <CollectionFeatured />
            <ProducListing />
            <SpecialOffer />
          </>
        ) 
      }

      {
        ativarComponente === 'produtos' && (
          <>
            <ProducListing paginaProdutos={true}/>
          </>
        )
      }
    </div>
  )
}

export default Section
