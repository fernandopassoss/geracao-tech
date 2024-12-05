import React from 'react';
import Header from './Header';
import Footer from './Footer'
import Slideshow from './Slideshow';
import CollectionFeatured from './CollectionFeatured';
import SpecialOffer from './SpecialOffer';
import ProductListing from './ProductListing';
import Gallery from './Gallery';
import BuyBox from './BuyBox';
import '../styles/Layout.scss'


const Layout = ({ children }) => {
  
  return (
    <div className="layout">

      <div>
        {
          children === 'homepage' && (
            <>
              <Header />
              <Slideshow />
              <CollectionFeatured />
              <ProductListing />
              <SpecialOffer />
              <Footer />
            </>
          )
        }

        {
          children === 'header' && (
            <>
              <Header />
            </>
          )
        }

        {
          children === 'footer' && (
            <>
              <Footer />
            </>
          )
        }
        {
          children === 'productviewpage' && (
            <>
              <Header />
              <div className='gallery-buybox' style={{ backgroundColor: '#F9F8FE' }}>
                <Gallery className='section-gallery' />
                <BuyBox className='section-buybox' />
              </div>
              <ProductListing />
              <Footer />
            </>
          )
        }
      </div>

    </div>
  );
};

export default Layout;
