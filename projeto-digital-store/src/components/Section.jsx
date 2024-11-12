import React from 'react'
import CollectionFeatured from './CollectionFeatured'
import SpecialOffer from './SpecialOffer'
import ProducListing from './ProductListing'

function Section() {
  return (
    <div style={{backgroundColor:'#F9F8FE'}}>
      <CollectionFeatured/>
      <SpecialOffer/>
      <ProducListing/>
    </div>
  )
}

export default Section
