import React from 'react'
import '../styles/ProductListing.scss'
import { BsArrowRight } from "react-icons/bs";
import ProductCard from './ProductCard';

function ProductListing({paginaProdutos}) {


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
    <div >
      <div className={paginaProdutos===true? 'listing-cabecario-ativo' : 'listing-cabecario'}>
        <p className={paginaProdutos===true? 'listing-cabecario-item1-ativo': 'listing-cabecario-item1'}>
          Produtos em alta
        </p>
        <div className={paginaProdutos===true? 'listing-cabecario-item2-ativo': 'listing-cabecario-item2'}>
          <a href='#' className={paginaProdutos===true?'cabecario-link-ativo': 'cabecario-link'}>
            Ver todos
          </a>
          <BsArrowRight className={paginaProdutos==true?'cabecario-seta-ativo': 'cabecario-seta'} />
        </div>

      </div>
      <div className={paginaProdutos===true?'listing-ativo':'listing'}>
        <ProductCard items={items} />
      </div>  
    </div>

  )
}

export default ProductListing
