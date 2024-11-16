import React from 'react'
import '../styles/ProductListing.scss'
import { BsArrowRight } from "react-icons/bs";
import ProductCard from './ProductCard';
function ProductListing() {


  const items = [
    {
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      image: require('../public/produc-image-1.jpeg'),
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      image: require('../public/produc-image-2.jpeg'),
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      image: require('../public/produc-image-3.jpeg'),
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      image: require('../public/produc-image-4.jpeg'),
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      image: require('../public/produc-image-5.jpeg'),
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      image: require('../public/produc-image-3.jpeg'),
      price: 200,
      priceDiscount: 149.9
    }, 
    {
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      image: require('../public/produc-image-2.jpeg'),
      price: 200,
      priceDiscount: 149.9
    }, 
     {
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      image: require('../public/produc-image-1.jpeg'),
      price: 200,
      priceDiscount: 149.9
    }
  ]

  return (
    <div style={{ margin: '10% auto'}}>
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
        <ProductCard items={items} />



      </div>
    </div>

  )
}

export default ProductListing
