  import React from 'react'
  import CollectionFeatured from './CollectionFeatured'
  import SpecialOffer from './SpecialOffer'
  import ProducListing from './ProductListing'
  import Slideshow from './Slideshow'


  function Section({ ativarComponente }) {
    return (
      <div >
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
              <ProducListing paginaProdutos={true} />
            </>
          )
        }

        {
          ativarComponente === 'categorias' && (
            <div style={{ width: '100%', height: '310px' }}>

            </div>
          )
        }

        {
          ativarComponente === 'pedidos' && (
            <div style={{ width: '100%', height: '310px' }}>

            </div>
          )
        }
      </div>
    )
  }

  export default Section
