import React from 'react';
import '../styles/ProductCard.scss';

function ProductCard({ items }) {
  return (
    <div className="product-lista-div">
      {items.map((item, index) => (
        <div key={index} className="product-item"><a href='http://localhost:3000/produtos/tenis' id='link-card'> 
          <img src={item.image} alt={item.name} className="product-img" />
          <div className="product-info">
            <p className="product-type">{item.type}</p>
            <p className="product-name">{item.name}</p>
            <div className='product-prices'>
              <p className="product-price">{`$${item.price}`}</p>
              <p className='product-price-discount'>{
                item.priceDiscount !== '' && (
                  <span>{`$${item.priceDiscount} `}</span>
                )
              }</p>
            </div>
          </div>
          </a>
        </div>
      ))}
    </div>
    
    
  );
}

export default ProductCard;
