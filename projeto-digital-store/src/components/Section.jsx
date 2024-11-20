import React from 'react'
import CollectionFeatured from './CollectionFeatured'
import SpecialOffer from './SpecialOffer'
import ProducListing from './ProductListing'
import Slideshow from './Slideshow'
import FilterGroup from './FilterGroup'
import ProductListingPage from '../pages/ProductListingPage'

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
              <ProductListingPage/>
           
          </>
        )
      }

    </div>
  )
}

export default Section
