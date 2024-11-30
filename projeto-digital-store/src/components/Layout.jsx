import React from 'react';
import Header from './Header';
import Footer from './Footer'
import Slideshow from './Slideshow';
import CollectionFeatured from './CollectionFeatured';
import SpecialOffer from './SpecialOffer';
import ProductListing from './ProductListing';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header/>
       <div style={{ backgroundColor: '#F9F8FE' }}>
        {
          children === 'homepage' && (
            <>
              <Slideshow />
              <CollectionFeatured />
              <ProductListing />
              <SpecialOffer />
            </>
          )
        }
        </div>
        <Footer/>
    </div>
  );
};

export default Layout;
